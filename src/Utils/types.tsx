import { Dispatch, SetStateAction } from "react";
import { Context } from "vm";

export type Option = {
  label: string;
  icon: string;
  isSelected?: boolean;
};

export type Slide = {
  title: string;
  options: Option[];
};

export type CarouselContextData = {
  isSubmitted: boolean;
  currentSlide: number;
  slides: Slide[];
};

export type CarouselContextProps = {
  carouselData: Context;
  setCarouselData: Dispatch<SetStateAction<CarouselContextData>>;
};
