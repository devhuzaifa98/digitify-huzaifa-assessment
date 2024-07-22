import { AnimatePresence, motion } from "framer-motion";
import { useCarousel } from "../../hooks/useCarousel";

export const Title = () => {
  const { currentSlide } = useCarousel();

  return (
    <div className="flex flex-col justify-center items-center h-full relative">
      <AnimatePresence>
        <motion.h1
          className="text-white m-auto text-3xl m-2 md:text-7xl font-bold md:ml-10 text-center md:text-left"
          key={currentSlide.title}
          initial={{ translateY: "100%", opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: "-100%", position: "absolute", opacity: 0 }}
        >
          {currentSlide.title}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};
