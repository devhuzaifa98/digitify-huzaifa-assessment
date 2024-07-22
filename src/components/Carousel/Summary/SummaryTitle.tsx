import { motion } from "framer-motion";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { useCarousel } from "../../../hooks/useCarousel";

export const SummaryTitle = () => {
  const isMobile = useIsMobile();
  const { isSubmitted } = useCarousel();
  return (
    <motion.div
      role="summary-title-container"
      {...(isSubmitted
        ? {}
        : {
            exit: {
              [isMobile ? "y" : "x"]: "-100%",
              transition: { bounce: 0 },
            },
            initial: { [isMobile ? "y" : "x"]: "-100%" },
            animate: { [isMobile ? "y" : "x"]: 0, transition: { bounce: 0 } },
          })} // Smooth horizontal exit (only for slides)
      className="md:w-1/2 h-auto md:h-full p-3 md:py-0 bg-primary flex justify-center items-center"
    >
      <motion.h1
        initial={{ translateX: -50, opacity: 0 }}
        role="summary-title"
        animate={{
          translateX: 0,
          opacity: 1,
          transition: { delay: 0.2, bounce: 0 },
        }}
        className="text-center md:text=center text-white text-3xl md:text-5xl font-bold"
        exit={{ translateX: -50, opacity: 0, transition: { duration: 0.1 } }}
      >
        Verify your submission
      </motion.h1>
    </motion.div>
  );
};
