import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/navigation";

const Products = () => {
  return (
    <>
      <section className="xl:px-14 lg:px-8 px-4 py-6">
        <div className="md:flex text-center md:text-left justify-between items-end lg:mb-10 mb-7">
          <div className="md:w-[80%] xl:w-auto">
            <h2 className="lg:text-[32px] md:text-[26px] text-[20px] font-semibold">
              Featured Products
            </h2>
            <p className="lg:text-[15px] md:text-[14px] text-[11px] md:w-[70%] lg:w-[70%] text-gray-700 ">
              Browse our carefully selected top picks, chosen to match your
              style, preferences, and needs for a seamless shopping experience.
            </p>
          </div>
        </div>

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
      </section>
    </>
  );
};

export default Products;
