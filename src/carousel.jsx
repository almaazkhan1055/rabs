import React, { useState, useEffect } from "react";
import { carouselData } from "./data/data";
import { CarouselCard } from "./carouselCard";
import { NavigationButtons } from "./navigationbtns";

const defaultBgImg =
  "https://rabsnetsolutions.com/experience-center/assets/img/RABS_Landing_Page/edtech.jpg";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgImage, setBgImage] = useState(defaultBgImg);
  const [isMobile, setIsMobile] = useState(false);

  const cardsToShow = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(carouselData.length / cardsToShow);

  const bgImgArray = [
    "https://rabsnetsolutions.com/experience-center/assets/img/RABS_Landing_Page/edtech.jpg",
    "https://rabsnetsolutions.com/experience-center/assets/img/RABS_Landing_Page/industries/1.webp",
    "https://rabsnetsolutions.com/experience-center/assets/img/RABS_Landing_Page/industries/5.webp",
    "https://rabsnetsolutions.com/experience-center/assets/img/RABS_Landing_Page/telecommunicationindustry.jpg",
    "https://rabsnetsolutions.com/experience-center/assets/img/RABS_Landing_Page/realestateindustry.jpg",
    "https://rabsnetsolutions.com/experience-center/assets/img/RABS_Landing_Page/technologyindustry.jpg",
  ];

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleMouseEnter = () => {
    const randomIndex = Math.floor(Math.random() * bgImgArray.length);
    setBgImage(bgImgArray[randomIndex]);
  };

  const handleMouseLeave = () => {
    setBgImage(defaultBgImg);
  };

  return (
    <div
      className="relative w-full overflow-hidden p-4 md:p-10 object-cover"
      style={{
        backgroundImage: `url(${bgImage}),linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.3s ease-in-out",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#00000090",
      }}
    >
      <h2 className="text-center text-3xl md:text-6xl font-semibold text-white my-3 md:my-5">
        Industries <br />
        <span className="text-[#FFD060]">We've</span> Worked For
      </h2>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div
            key={slideIndex}
            className="flex-shrink-0 w-full flex justify-center md:justify-between px-4 md:px-10"
          >
            {carouselData
              .slice(
                slideIndex * cardsToShow,
                slideIndex * cardsToShow + cardsToShow
              )
              .map((slide, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/3"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <CarouselCard slide={slide} isMobile={isMobile} />
                </div>
              ))}
          </div>
        ))}
      </div>
      <NavigationButtons prevSlide={prevSlide} nextSlide={nextSlide} />
    </div>
  );
};

export default Carousel;
