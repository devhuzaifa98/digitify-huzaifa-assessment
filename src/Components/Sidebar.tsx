import { useCarousel } from "../Hooks/useCarousel";
import Poll from "../assets/poll.svg";

export const Sidebar = () => {
  const { currentSlideIndex, totalSlides, jumpToSlide } = useCarousel();
  return (
    <div className="relative w-full md:w-auto">
      <img src={Poll} alt="poll-icon" className="w-full md:w-10 h-10 md:absolute left-6 top-10 md:my-0 my-5" />
      <div className="flex flex-row md:flex-col justify-evenly md:justify-center items-center md:space-y-3 w-full md:w-24 md:min-h-screen">
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
    </div>
  );
};
