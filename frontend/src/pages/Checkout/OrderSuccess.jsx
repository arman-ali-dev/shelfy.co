import checkImage from "../../assets/check.png";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <>
      <div className="h-[85vh] flex justify-center items-center">
        <div class="lg:w-175 w-full pb-14  text-center   border-gray-300 lg:border rounded-md pt-14">
          <img class="lg:w-25 w-16.5 mx-auto" src={checkImage} alt="" />

          <h2 class="font-medium lg:text-[26px] text-[20px] mt-2">
            Order Confirmed
          </h2>
          <p class="lg:text-[15px] text-[12px] px-14 lg:px-0 font-medium -mt-0.5">
            Thank you for your order. We've sent a confirmation email to your
            address.
          </p>
          <p class="lg:text-[14px] text-[12px] font-medium ">
            Order number: #ORD-10600
          </p>

          <div class="lg:mt-7 mt-5">
            <Link
              to="/"
              class="bg-black/10 px-10 lg:py-2.5 py-2 text-black text-[13px] lg:text-[15px] font-medium inline-block  rounded-sm"
            >
              Back To Home
            </Link>

            <Link class="bg-black ml-2 px-10 lg:py-2.5 py-2 text-white text-[13px] lg:text-[15px] font-medium inline-block  rounded-sm">
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
