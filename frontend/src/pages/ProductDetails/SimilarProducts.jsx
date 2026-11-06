import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductCard from "../Home/Product/ProductCard";

const SimilarProduct = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.6,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <SwiperSlide key={item}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarProduct;
