import { Summary } from "./Summary";
import { motion } from "framer-motion";
import { SummaryTitle } from "./SummaryTitle";
import { useCarousel } from "../../../Hooks/useCarousel";

export const SummarySlide = () => {
  const { isSubmitted } = useCarousel();
  return (
    <motion.div className="w-full h-full flex flex-col md:flex-row" key={"summary"}>
      <Summary />
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0, transition: { bounce: 0 } }}
        {...(isSubmitted
          ? {}
          : { exit: { x: "-100%", transition: { bounce: 0 } } })} // Smooth horizontal exit (only for slides)
        className="w-1/2 min-h-screen bg-primary flex justify-center items-center"
      >
        <SummaryTitle />
      </motion.div>
    </motion.div>
  );
};
