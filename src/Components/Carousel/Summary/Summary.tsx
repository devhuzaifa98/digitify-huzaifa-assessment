import { motion } from "framer-motion";
import { useCarousel } from "../../../Hooks/useCarousel";

export const Summary = () => {
  const { allSlides, submitForm, jumpToSlide } = useCarousel();
  return (
    <motion.div className="relative w-1/2 p-10">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <h1 className="text-primary text-5xl mb-5 font-bold">Summary</h1>
        <p className="text-gray-400 text-2xl mb-5">
          You have selected the following options:
        </p>
      </motion.div>
      <motion.ol className="text-gray-400 text-2xl list-decimal pl-5 cursor-pointer">
        {allSlides.map((slide, index) => (
          <motion.li
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.2 }}
            key={slide.title}
          >
            <div className="flex justify-between summary-list-item">
              <h1>{slide.title}</h1>
              <div className="flex space-x-2 justify-center items-center">
                <h1
                  className="text-sm text-primary summary-list-change-btn"
                  onClick={() => jumpToSlide(index)}
                >
                  Change
                </h1>
                <h1>{slide.options.find((opt) => opt.isSelected)?.label}</h1>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ol>
      <motion.button
        className="absolute bottom-5 border-2 border-primary right-10 hover:bg-primary hover:text-white text-primary text-xl py-2 px-5"
        onClick={() => submitForm()}
      >
        Submit
      </motion.button>
    </motion.div>
  );
};
