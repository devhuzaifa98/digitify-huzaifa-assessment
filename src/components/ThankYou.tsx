import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";
export const ThankYou = () => {
  const isMobile = useIsMobile();
  return (
    <motion.div
      className="bg-primary md:h-full w-full md:w-auto flex justify-center items-center"
      initial={{
        [isMobile ? "height" : "width"]: "50%",
        position: "absolute",
        [isMobile ? "top" : "right"]: 0,
      }}
      role="thank-you-container"
      animate={{
        [isMobile ? "top" : "right"]: 0,
        [isMobile ? "height" : "width"]: "100%",
        transition: { duration: 0.5 },
      }}
    >
      <motion.h1
        initial={{ translateX: -50, opacity: 0 }}
        role="thank-you-text"
        animate={{
          translateX: 0,
          opacity: 1,
          transition: { delay: 0.5, bounce: 0 },
        }}
        className="text-center text-white text-4xl md:text-7xl font-bold relative"
      >
        Thanks for your submission!
      </motion.h1>
    </motion.div>
  );
};
