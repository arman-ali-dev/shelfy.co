import React from "react";
import location from "../assets/location.png";
import stars from "../assets/stars.png";

const Header = () => {
  return (
    <div className="bg-black lg:flex hidden flex-wrap items-center justify-between py-3 px-4 sm:px-10">
      <p className="font-medium text-[12px] text-white/90">
        Free shipping on orders over ₹999 | Easy returns available
      </p>

      <ul className="flex gap-8 items-center text-white/90 text-[14px] font-medium">
        <li className="flex text-[12px] items-start">
          <img
            src={stars}
            alt=""
            className="w-5 h-5 mr-2 filter invert brightness-0"
          />
          <span> Upgrade Your Lifestyle with Shelfy.Co</span>
        </li>

        <li className="bg-white text-black px-3 py-1.25 rounded-md cursor-pointer">
          EN
        </li>
      </ul>
    </div>
  );
};

export default Header;
