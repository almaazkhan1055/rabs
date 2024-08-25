export const CarouselCard = ({ slide, isMobile }) => (
  <div className={`${isMobile ? "w-11/12 mx-auto" : "w-full"} px-2 md:px-4`}>
    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg group">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-[calc(100%-4rem)] group-hover:translate-y-0 transition-transform duration-300 h-full">
        <h2 className="text-[20px] font-bold mb-2 text-center">
          {slide.title}
        </h2>
        <p className=" text-sm md:text-[18px] text-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {slide.description}
        </p>
        {slide.img && (
          <img
            src={slide.img}
            alt={`${slide.title} icon`}
            className="mx-auto h-12 w-12 object-contain"
          />
        )}
      </div>
    </div>
  </div>
);
