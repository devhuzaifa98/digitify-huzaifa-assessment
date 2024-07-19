import { Sidebar } from "../Sidebar";
import { Options } from "./Options";
import { Title } from "./Title";
import { motion } from "framer-motion";

export const StandardSlides = () => (
  <>
    <motion.div
      className="w-full justify-center items-center flex-row bg-white min-h-screen hidden md:flex"
      key={"standard"}
    >
      <div className="w-1/2 bg-primary items-center flex">
        <Sidebar />
        <Title />
      </div>
      <Options />
    </motion.div>
    <motion.div
      className="w-full min-h-screen md:hidden grid grid-rows-2 grid-cols-1"
      key={"standard"}
    >
      <div className="bg-primary w-full row-span-1 flex flex-col">
        <Sidebar />
        <Title />
      </div>
      <Options />
    </motion.div>
  </>
);
