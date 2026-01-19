import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const GalleryCarousel = ({ images }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="w-full mb-16"
    >
      {images.map((item) => (
            <SwiperSlide key={item.id}>
  <div className="overflow-hidden rounded-xl shadow-lg">
    <img
      src={item.img}
      alt="Gallery"
      className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh]
                 object-cover hover:scale-105 transition-transform duration-700"
    />
  </div>
</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GalleryCarousel;
