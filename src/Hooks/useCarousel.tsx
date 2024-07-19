import { useContext } from "react";
import { CarouselContext } from "../Context/Carousel";
import { Option, Slide } from "../Utils/types";

const URL = process.env.REACT_APP_FORM_SUBMIT_URL as string;

export const useCarousel = () => {
  const { carouselData, setCarouselData } = useContext(CarouselContext);
  const currentSlide = carouselData.slides[carouselData.currentSlide] as Slide;

  const nextSlide = () => {
    setCarouselData((prev) => ({
      ...prev,
      currentSlide: prev.currentSlide + 1,
    }));
  };

  const jumpToSlide = (index: number) => {
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
    }));
  };

  const selectOption = (index: number) => {
    setCarouselData((prev) => ({
      ...prev,
      slides: prev.slides.map((slide, slideIndex) => ({
        ...slide,
        options: slide.options.map((option, optionIndex) => ({
          ...option,
          isSelected:
            slideIndex === prev.currentSlide
              ? index === optionIndex
              : option.isSelected,
        })),
      })),
    }));
  };

  const submitForm = async () => {
    const data = carouselData.slides.map((slide: Slide) => ({
      title: slide.title,
      value: slide.options.find((option: Option) => option.isSelected)?.label,
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
