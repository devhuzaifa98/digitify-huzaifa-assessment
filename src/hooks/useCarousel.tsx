import { useContext } from "react";
import { CarouselContext } from "../context/Carousel";
import { Option, Slide } from "../utils/types";

const URL = process.env.REACT_APP_FORM_SUBMIT_URL as string;

export const useCarousel = () => {
  const { carouselData, setCarouselData } = useContext(CarouselContext);
  const currentSlide = carouselData.slides[carouselData.currentSlide] as Slide;

  const nextSlide = () => {
    if (carouselData.editMode) return jumpToSlide(carouselData.slides.length);
    setCarouselData((prev) => ({
      ...prev,
      currentSlide: prev.currentSlide + 1,
    }));
  };

  const jumpToSlide = (index: number, editMode = false) => {
    //check if the slide before the targetted slide is selected so we dont skip incompleted slides
    const isAllowed =
      index < carouselData.currentSlide ||
      carouselData.slides[index - 1].options.some(
        (option: Option) => option.isSelected
      );
    if (!isAllowed) return;

    setCarouselData((prev) => ({
      ...prev,
      currentSlide: index,
      editMode: !!editMode,
    }));
  };

  const selectOption = (index: number) => {
    const slides = [...carouselData.slides];
    slides[carouselData.currentSlide].options[index].isSelected = true;
    setCarouselData((prev) => ({
      ...prev,
      slides: slides,
    }));
  };

  const submitForm = async () => {
    const data = carouselData.slides.map((slide: Slide) => ({
      [slide.key]: slide.options.find((option: Option) => option.isSelected)
        ?.key,
    }));

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setCarouselData((prev) => ({
        ...prev,
        isSubmitted: true,
      }));
    }
  };

  return {
    currentSlide,
    currentSlideIndex: carouselData.currentSlide,
    totalSlides: carouselData.slides.length + 1, //add an extra slide for summary
    allSlides: carouselData.slides as Slide[],
    isSubmitted: carouselData.isSubmitted,
    submitForm,
    nextSlide,
    jumpToSlide,
    selectOption,
  };
};
