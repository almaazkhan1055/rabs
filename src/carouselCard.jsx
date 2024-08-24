export const CarouselCard = ({ slide, isMobile }) => (
  <div className={`${isMobile ? "w-11/12 mx-auto" : "w-full"} px-2 md:px-4`}>
    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg group">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
        <div className="bg-white p-6 leading-10 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 w-full h-[250px] lg:h-[200px]">
          <h2 className="text-lg font-bold">{slide.title}</h2>
          <p className="text-sm">{slide.description}</p>
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
  </div>
);
