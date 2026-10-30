import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";
import { Button, CircularProgress, Divider } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import shoppingImage from "../../assets/shopping.png";
import vanImage from "../../assets/van.png";
import returnImage from "../../assets/return.png";
import Details from "./Details";
import Features from "./Features";

const images = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80&auto=format&fit=crop",
];

const ProductDetails = () => {
  const [activeImage, setActiveImage] = useState(0);

  const handleChangeActiveImage = (value) => {
    setActiveImage(value);
  };

  const [activeTab, setActiveTab] = useState("details");

  const handleChangeActiveTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="px-4 lg:px-14 lg:pt-10 pt-5">
        {false ? (
          <ProductDetailsSkeleton />
        ) : (
          <div className="grid  grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
            <section className="flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-[15%] flex md:flex-col gap-3">
                {images.map((elem, index) => (
                  <img
                    onClick={() => handleChangeActiveImage(index)}
                    className="md:w-22.5 w-[25%] h-17.5 lg:h-27.5 object-cover object-top cursor-pointer rounded-md"
                    src={elem}
                    alt=""
                  />
                ))}
              </div>
              <div className="w-full  md:w-[85%]">
                <img
                  className="w-full lg:h-150 h-92.5 object-center object-cover  rounded-md"
                  src={images[activeImage]}
                  alt=""
                />
              </div>
            </section>

            <section>
              <h1 className="font-bold md:text-lg text-md ">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>

              <p className="text-gray-500 lg:text-[14px] md:text-[14px] text-[12px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo beatae praesentium alias sunt ipsum! Porro officiis
                maiores molestias veritatis corporis facere error? Iusto ducimus
                aut, quis dolorum, quos modi consequuntur expedita iste
                corporis, rerum unde!
              </p>

              <div className="flex justify-between items-center py-2 rounded-sm border border-gray-300 w-37.5 lg:w-45 px-3 mt-3 lg:mt-5">
                <div className="flex gap-1 items-center">
                  <span className="lg:text-[16px] text-[13px]">4</span>
                  <StarIcon
                    sx={{
                      color: yellow[800],
                      fontSize: { xs: "14px", md: "17px" },
                      marginTop: "-2px",
                    }}
                  />
                </div>

                <Divider orientation="vertical" flexItem />
                <span className="lg:text-[16px] text-[13px]">234 Ratings</span>
              </div>

              <div>
                <div className="price flex items-center gap-3 lg:mt-5 mt-3 text-[14px] md:text-md lg:text-xl">
                  <span className="font-sans text-gray-800">₹ 599</span>
                  <span className="line-through text-gray-400">₹ 699</span>
                  <span className=" font-semibold">{Math.floor(10)}%</span>
                </div>

                <p className="lg:text-sm md:text-[14px] text-[12px]">
                  Inclusive of all taxes. Free Shipping above ₹1500.
                </p>
              </div>

              <div class="mt-4">
                <p class="lg:text-[15px] text-[13px] font-medium">
                  Color:  black
                </p>

                <ul class="mt-2 flex gap-2">
                  <li class="lg:w-8 w-8 bg-black cursor-pointer lg:h-8 h-6 activeColor rounded-full inline-block"></li>
                </ul>
              </div>

              <div class="mt-7">
                <p class="lg:text-[15px] text-[13px] font-medium">Size:</p>

                <ul class="flex flex-wrap mt-2 gap-2">
                  <li>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "white",
                        background: "black",
                        borderColor: "#000",
                      }}
                      className={`border rounded-md lg:px-7 px-4 py-2 `}
                    >
                      <span className="font-medium lg:text-[14px] text-[12px]">
                        XL
                      </span>
                    </Button>
                  </li>
                </ul>
              </div>

              <div className="lg:mt-4 mt-3 space-y-2">
                <h1 className="font-medium lg:text-[16px] text-[14px]">
                  Quantity
                </h1>

                <div className="flex gap-4">
                  <div className="flex lg:py-2 py-1 px-3 border-gray-300 border rounded-sm items-center gap-2 min-w-30 lg:min-w-35 justify-between">
                    <button
                      disabled={false}
                      className={`${
                        true
                          ? "cursor-not-allowed opacity-50"
                          : "cursor-pointer opacity-100"
                      }`}
                    >
                      <RemoveIcon sx={{ color: "black", fontSize: 16 }} />
                    </button>
                    <span className="lg:text-[16px] text-[13px]">1</span>
                    <button
                      disabled={false}
                      className={`${
                        false
                          ? "cursor-not-allowed opacity-50"
                          : "cursor-pointer opacity-100"
                      }`}
                    >
                      <AddIcon sx={{ color: "black", fontSize: 16 }} />
                    </button>
                  </div>

                  <Button
                    variant="outlined"
                    className="border-gray-300! text-black! capitalize!"
                    sx={{
                      py: { xs: "8px", md: "10px" },
                      px: 2,
                    }}
                  >
                    <FavoriteBorderIcon
                      sx={{ fontSize: { xs: "17px", lg: "19px" } }}
                    />
                  </Button>
                </div>
              </div>

              <div className="lg:mt-5 mt-3 flex  gap-2 lg:gap-5">
                <Button
                  fullWidth
                  className="border-black! border! text-white! bg-black! capitalize!"
                  variant="contained"
                  sx={{
                    py: { xs: "8px", md: "10px" },
                    px: 2,
                  }}
                >
                  <span className="font-medium lg:text-[16px] text-[13px]">
                    Buy Now
                  </span>
                </Button>

                <Button
                  fullWidth
                  className="border-gray-300! text-black! capitalize!"
                  variant="outlined"
                  sx={{
                    py: { xs: "8px", md: "10px" },
                    px: 2,
                  }}
                  disabled={false}
                >
                  {false ? (
                    <CircularProgress color="white" size={15} />
                  ) : (
                    <span className="font-medium lg:text-[16px] text-[13px]">
                      Add To Cart
                    </span>
                  )}
                </Button>
              </div>

              <div class="flex mt-4 lg:gap-3 gap-2">
                <div class="bg-black w-55 lg:rounded-xl rounded-md text-center px-2 lg:px-4 py-4">
                  <div class=" mx-auto w-12.5 h-12.5 flex justify-center items-center rounded-full">
                    <img class="lg:w-7 w-6" src={vanImage} alt="" />
                  </div>

                  <h3 class="text-white lg:text-[14px] text-[12px] font-medium mt-1">
                    Free Fast Ship
                  </h3>
                  <p class="text-white lg:text-[12px] text-[10px] font-medium">
                    All World Orders
                  </p>
                </div>

                <div class="bg-black w-55 lg:rounded-xl rounded-md text-center px-2 lg:px-4 py-4">
                  <div class="mx-auto w-12.5 h-12.5 flex justify-center items-center rounded-full">
                    <img class="lg:w-7 w-7" src={shoppingImage} alt="" />
                  </div>

                  <h3 class="text-white lg:text-[14px] text-[12px] font-medium mt-1">
                    Safe Card Pay
                  </h3>
                  <p class="text-white lg:text-[12px] text-[10px] font-medium">
                    Secure Cash Flow
                  </p>
                </div>

                <div class="bg-black w-55 lg:rounded-xl rounded-md text-center px-2 lg:px-4 py-4">
                  <div class=" mx-auto w-12.5 h-12.5 flex justify-center items-center rounded-full">
                    <img class="lg:w-7 w-7" src={returnImage} alt="" />
                  </div>

                  <h3 class="text-white lg:text-[14px] text-[12px] font-medium mt-1">
                    Easy Free Return
                  </h3>
                  <p class="text-white lg:text-[12px] text-[10px] font-medium">
                    30 Days Back
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        <div class="bg-black backdrop-blur mt-10 px-2 flex justify-between  py-2 rounded-sm">
          <span
            onClick={() => handleChangeActiveTab("details")}
            class={`
              ${activeTab == "details" && "bg-[#FFFFFF] text-black!"}
              lg:px-20 px-8 inline-block  cursor-pointer  rounded-sm py-1.5 text-white  lg:text-[14px] text-[12px] font-medium `}
          >
            Details
          </span>
          <span
            onClick={() => handleChangeActiveTab("features")}
            class={`
              ${activeTab == "features" && "bg-[#FFFFFF] text-black!"}
              lg:px-20 px-8 inline-block  cursor-pointer  rounded-sm py-1.5 text-white  lg:text-[14px] text-[12px] font-medium `}
          >
            Features
          </span>
          <span
            onClick={() => handleChangeActiveTab("reviews")}
            class={`
              ${activeTab == "reviews" && "bg-[#FFFFFF] text-black!"}
              lg:px-20 px-8 inline-block  cursor-pointer  rounded-sm py-1.5 text-white  lg:text-[14px] text-[12px] font-medium `}
          >
            Reviews
          </span>
        </div>

        {activeTab == "details" ? (
          <Details />
        ) : activeTab == "features" ? (
          <Features />
        ) : (
          <Reviews productId={productId} />
        )}
      </div>
    </>
  );
};

export default ProductDetails;
