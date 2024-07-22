import { Sidebar } from "../Sidebar";
import { Options } from "./Options";
import { Title } from "./Title";
import { motion } from "framer-motion";

export const StandardSlides = () => (
  <motion.div
    className="w-full h-full bg-white flex flex-col md:flex-row"
    key={"standard"}
  >
    <div className="w-full h-1/2 md:h-full md:w-1/2 bg-primary flex flex-col md:flex-row items-center">
      <Sidebar />
      <Title />
    </div>
    <Options />
  </motion.div>
);
