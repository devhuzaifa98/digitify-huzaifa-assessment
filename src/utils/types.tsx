import { Dispatch, SetStateAction } from "react";
import { Context } from "vm";

export type Option = {
  label: string;
  icon: string;
  key: string;
  isSelected?: boolean;
};

export type Slide = {
  title: string;
  key: string;
  options: Option[];
};

export type CarouselContextData = {
  isSubmitted: boolean;
  currentSlide: number;
  editMode: boolean;
  slides: Slide[];
};

export type CarouselContextProps = {
  carouselData: Context;
  setCarouselData: Dispatch<SetStateAction<CarouselContextData>>;
};
