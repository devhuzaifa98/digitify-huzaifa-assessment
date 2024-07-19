import { AnimatePresence, motion } from "framer-motion";
import { useCarousel } from "../../Hooks/useCarousel";

export const Title = () => {
  const { currentSlide } = useCarousel();

  return (
    <AnimatePresence>
      <motion.h1
        className="text-white m-auto text-4xl md:text-7xl font-bold md:ml-10 relative md:w1/2 text-center md:text-left"
        key={currentSlide.title}
        initial={{ translateY: 300, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        exit={{ translateY: "-100%", position: "absolute", opacity: 0 }}
      >
        {currentSlide.title}
      </motion.h1>
    </AnimatePresence>
  );
};
