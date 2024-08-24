import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

export const NavigationButtons = ({ prevSlide, nextSlide }) => (
  <div className="flex items-center justify-between">
    <FaCircleChevronLeft
      onClick={prevSlide}
      className="absolute top-[60%] left-10 text-gray-500 text-3xl cursor-pointer"
    />
    <FaCircleChevronRight
      onClick={nextSlide}
      className="absolute top-[60%] right-10 text-gray-500 text-3xl cursor-pointer"
    />
  </div>
);
