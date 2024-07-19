import { motion } from "framer-motion";

export const SummaryTitle = () => (
  <motion.h1
    initial={{ translateX: -50, opacity: 0 }}
    animate={{
      translateX: 0,
      opacity: 1,
      transition: { delay: 0.2, bounce: 0 },
    }}
    className="text-white text-7xl font-bold relative "
    exit={{ translateX: -50, opacity: 0, transition: { duration: 0.1 } }}
  >
    Verify your submission
  </motion.h1>
);
