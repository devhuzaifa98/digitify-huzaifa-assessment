import { useCarousel } from "../../hooks/useCarousel";
import { AnimatePresence } from "framer-motion";
import { SummarySlide } from "./Summary/SummarySlide";
import { StandardSlides } from "./Slide";
import { ThankYou } from "../ThankYou";

export const Carousel = () => {
  const { currentSlideIndex, totalSlides, isSubmitted } = useCarousel();
  const isSummarySlide = currentSlideIndex === totalSlides - 1;

  return (
    <>
      {/* AnimatePresense breaks for ternary operators. Its a bug so had to render this way */}
      {!isSummarySlide && !isSubmitted && <StandardSlides />}
      <AnimatePresence>
        {isSummarySlide && !isSubmitted && <SummarySlide />}
      </AnimatePresence>
      {isSubmitted && <ThankYou />}
    </>
  );
};
