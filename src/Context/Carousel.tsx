import React, {
  createContext,
  useState,
  ReactNode,   
} from "react";
import { Slides } from "../Utils/Slides";
import { CarouselContextProps, CarouselContextData } from "../Utils/types";

export const CarouselContext = createContext<CarouselContextProps>({
  carouselData: { currentSlide: 0, slides: [] },
  setCarouselData: () => {},
});

export const CarouselProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [carouselData, setCarouselData] = useState<CarouselContextData>({
    currentSlide: 0,
    isSubmitted: false,
    slides: Slides.map((slide) => ({
      ...slide,
      options: slide.options.map((option) => ({
        ...option,
        isSelected: false,
      })),
    })),
  });

  return (
    <CarouselContext.Provider value={{ carouselData, setCarouselData }}>
      {children}
    </CarouselContext.Provider>
  );
};
