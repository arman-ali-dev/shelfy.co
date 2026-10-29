import CategoryGrid from "./CategoryGrid";
import ShopByCategory from "./ShopByCategory";

import deadline from "../../assets/deadline.png";
import shopping from "../../assets/shopping.png";
import easyReturn from "../../assets/return.png";
import premium from "../../assets/premium.png";
import LaptopDealImage from "../../assets/laptop-deal.png";
import Products from "./Products";

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

      <Products />
    </>
  );
};

export default Home;
