import CategoryGrid from "./Category/CategoryGrid";
import ShopByCategory from "./Category/ShopByCategory";

import deadline from "../../assets/deadline.png";
import shopping from "../../assets/shopping.png";
import easyReturn from "../../assets/return.png";
import premium from "../../assets/premium.png";
import LaptopDealImage from "../../assets/laptop-deal.png";
import Products from "./Product/Products";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <CategoryGrid />

      <ShopByCategory />

      <section className="lg:px-10 px-4 py-28">
        <div className="grid lg:grid-cols-4 px-3 lg:px-0 grid-cols-2 gap-y-8 lg:gap-y-0 bg-[#F8F8F8] py-10 lg:rounded-lg rounded-md">
          <div className="col-span-1 text-center">
            <div className="bg-black mx-auto h-14 w-14 rounded-full flex items-center justify-center">
              <img
                className="lg:w-8.25 w-6.5 filter invert brightness-0"
                src={deadline}
                alt=""
              />
            </div>
            <h2 className="lg:text-[14px] text-[13px] font-medium mt-1">
              Fast & Free Delivery
            </h2>
            <p className="lg:text-[12px] text-[11px]">
              Free shipping on all eligible orders
            </p>
          </div>

          <div className="col-span-1 text-center">
            <div className="bg-black mx-auto h-14 w-14 rounded-full flex items-center justify-center">
              <img
                className="lg:w-7.5 w-6.5 filter invert brightness-0"
                src={shopping}
                alt=""
              />
            </div>
            <h2 className="lg:text-[14px] text-[13px] font-medium text-black mt-1">
              100% Secure Payments
            </h2>
            <p className="text-black lg:text-[12px] text-[11px]">
              Safe & encrypted payment methods
            </p>
          </div>

          <div className="col-span-1 text-center">
            <div className="bg-black mx-auto h-14 w-14 rounded-full flex items-center justify-center">
              <img
                className="lg:w-7.5 w-6.5 filter invert brightness-0"
                src={easyReturn}
                alt=""
              />
            </div>
            <h2 className="lg:text-[14px] text-[13px] font-medium text-black mt-1">
              Easy Returns
            </h2>
            <p className="text-black lg:text-[12px] text-[11px]">
              Hassle-free returns within 30 days
            </p>
          </div>

          <div className="col-span-1 text-center">
            <div className="bg-black mx-auto h-14 w-14 rounded-full flex items-center justify-center">
              <img
                className="lg:w-7.5 w-6.5 filter invert brightness-0"
                src={premium}
                alt=""
              />
            </div>
            <h2 className="lg:text-[14px] text-[13px] font-medium text-black mt-1">
              Premium Quality Products
            </h2>
            <p className="text-black lg:text-[12px] text-[11px]">
              Top-quality materials & craftsmanship
            </p>
          </div>
        </div>
      </section>

      <section className="xl:px-14 lg:px-8 px-4 py-6">
        <div className="md:flex text-center md:text-left justify-between items-end lg:mb-10 mb-7">
          <div className="md:w-[80%] xl:w-auto">
            <h2 className="lg:text-[32px] md:text-[26px] text-[20px] font-semibold">
              Top Products
            </h2>
            <p className="lg:text-[15px] md:text-[14px] text-[11px] md:w-[70%] lg:w-[70%] text-gray-700 ">
              Browse our carefully selected top picks, chosen to match your
              style, preferences, and needs for a seamless shopping experience.
            </p>
          </div>
        </div>
        <Products />
      </section>

      <section className="bg-[#0E0E0E] py-10 xl:px-0 px-4 xl:my-26">
        <div className="grid md:grid-cols-2  items-center">
          <div className="col-span-1">
            <img
              src={LaptopDealImage}
              alt=""
              className="xl:h-67.5 h-45 mx-auto object-center"
            />
          </div>

          <div className="text-center xl:mt-0 mt-5">
            <p className="text-white xl:text-[17px] lg:text-[13px]  text-[11px] xl:w-[80%] mx-auto">
              Get high-performance desktops at unbeatable prices. Perfect for
              gaming, work, and multitasking - don’t miss out on this special
              offer!
            </p>

            <h1 className="xl:text-[52px] lg:text-[32px] text-[26px] mt-1 mb-1 text-[#eee] opacity-70 categoryHeading">
              30% OFF
            </h1>
            <Link className="text-black text-[11px] xl:text-[15px] bg-white xl:px-8 px-5 py-1.5 xl:py-2 rounded-full  inline-block  -mt-2">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

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
        <Products />
      </section>
    </>
  );
};

export default Home;
