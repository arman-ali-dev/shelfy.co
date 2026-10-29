import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/navigation";

const Products = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: { slidesPerView: 1.6 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3.5, spaceBetween: 30 },
        }}
      >
        {[1, 2, 3, 4]?.map((p) => (
          <SwiperSlide key={p.id}>
            <ProductCard product={p} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-10"></div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3700 }}
        breakpoints={{
          0: { slidesPerView: 1.6 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3.5, spaceBetween: 30 },
        }}
      >
        {[1, 2, 3, 4]?.map((p) => (
          <SwiperSlide key={p.id}>
            <ProductCard product={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Products;
