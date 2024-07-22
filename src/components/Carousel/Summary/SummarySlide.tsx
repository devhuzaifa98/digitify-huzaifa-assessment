import { Summary } from "./Summary";
import { motion } from "framer-motion";
import { SummaryTitle } from "./SummaryTitle";

export const SummarySlide = () => {
  return (
    <motion.div
      className="w-full h-screen flex md:justify-between flex-col-reverse justify-end md:flex-row"
      key={"summary"}
    >
      <Summary />
      <SummaryTitle />
    </motion.div>
  );
};
