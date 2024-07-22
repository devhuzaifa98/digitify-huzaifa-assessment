import { motion } from "framer-motion";
import { useCarousel } from "../../../hooks/useCarousel";

export const Summary = () => {
  const { allSlides, submitForm, jumpToSlide } = useCarousel();
  return (
    <motion.div className="relative h-full md:w-1/2 p-5 md:p-10 pb-0 flex flex-col">
      <motion.div
        role="summary-slide-header"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <h1 className="text-primary text-3xl mb-5 font-bold">Summary</h1>
        <p className="text-gray-400 text-xl md:text-2xl mb-5">
          You have selected the following options:
        </p>
      </motion.div>
      <motion.ol className="text-gray-400 text-xl md:text-2xl cursor-pointer overflow-y-auto overflow-x-hidden md:h-auto pr-4 space-y-3">
        {allSlides.map((slide, index) => (
          <motion.li
            role={`answer-${index + 1}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.2 }}
            key={slide.title}
          >
            <div className="flex flex-row justify-between md:items-center summary-list-item">
              <div className="flex flex-row gap-x-1">
                <span>{index + 1}.</span>
                <h1>{slide.title}</h1>
              </div>
              <div className="flex space-x-2 justify-end items-start">
                <button
                  className="text-sm text-primary summary-list-change-btn"
                  onClick={() => jumpToSlide(index, true)}
                >
                  Change
                </button>
                <h1>{slide.options.find((opt) => opt.isSelected)?.label}</h1>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ol>
      {/* <div className="flex justify-end mt-auto"> */}
      <motion.button
        className="border-2 border-primary hover:bg-primary hover:text-white text-primary text-xl py-2 px-5 mb-4 mt-auto"
        onClick={() => submitForm()}
      >
        Submit
      </motion.button>
      {/* </div> */}
    </motion.div>
  );
};
