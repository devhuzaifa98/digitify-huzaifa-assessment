import { useCarousel } from "../hooks/useCarousel";
import Poll from "../assets/poll.svg";

export const Sidebar = () => {
  const { currentSlideIndex, totalSlides, jumpToSlide } = useCarousel();
  return (
    <div className="w-full md:h-full md:w-auto flex justify-between flex-col">
      <img src={Poll} alt="poll-icon" className="md:w-10 h-10 m-5" />
      <div className="flex flex-row md:flex-col justify-evenly md:justify-center items-center md:space-y-3 w-full md:w-24 md:h-auto">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={`${
              currentSlideIndex === index ? "bg-gray-400" : "bg-white"
            } border-2 border-white w-4 h-4 rounded-full`}
            onClick={() => jumpToSlide(index)}
          ></button>
        ))}
      </div>
      <div className="md:w-10 h-10 m-5 hidden md:block"></div>
    </div>
  );
};
