export const CarouselCard = ({ slide }) => (
  <div className="w-1/3 p-2 group">
    <div className="relative overflow-hidden rounded-lg shadow-lg h-64">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
        <div className="bg-white p-6 leading-10 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 w-full">
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
