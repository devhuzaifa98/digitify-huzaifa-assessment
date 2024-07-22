import { useCarousel } from "../../hooks/useCarousel";
import { motion } from "framer-motion";

export const Options = () => {
  const { currentSlide, nextSlide, selectOption } = useCarousel();
  return (
    <div
      key={currentSlide.title}
      className="flex justify-evenly items-center flex-wrap h-1/2 m-5 md:w-1/2 md:m-auto md:px-10 md:h-auto"
    >
      {currentSlide.options.map((option, index) => (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          role={`option-${index+1}`}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.1, bounce: 0 },
          }}
          className={`${
            option.isSelected ? "" : "option"
          } flex flex-col items-center mx-2`}
          key={option.label + currentSlide}
        >
          <button
            type="button"
            onClick={() => {
              selectOption(index);
              nextSlide();
            }}
          >
            <img
              src={option.icon}
              alt={option.label}
              className="w-14 h:14 md:w-28 md:h-28"
            />
          </button>
          <p className="text-gray-400 text-center text-2xl mt-4">
            {option.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};
