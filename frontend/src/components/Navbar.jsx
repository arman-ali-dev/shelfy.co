import { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import heartIcon from "../assets/love.png";
import userIcon from "../assets/user (2).png";
import bagIcon from "../assets/shopping-bag.png";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Avatar,
  Tooltip,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
const Navbar = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        className={`w-full border-b border-[#bbb6b6] bg-white shadow-sm
    transition-all duration-300 ease-in-out
    ${
      isSticky
        ? "fixed top-0 left-0 z-50 translate-y-0 opacity-100"
        : "relative  opacity-100"
    }
  `}
      >
        <div className="lg:h-17.5 md:h-15 h-12.5 flex items-center justify-between px-4 sm:px-6 lg:px-12">
          <Link
            to="/"
            className="logo lg:hidden  cursor-pointer text-md md:text-xl font-bold"
          >
            Shelfy.Co
          </Link>

          <div className="flex items-center gap-10">
            <Link
              to="/"
              className="logo hidden lg:block  cursor-pointer text-md md:text-[23px] font-bold"
            >
              Shelfy.Co
            </Link>

            <div className="hidden md:block w-62.5 md:w-100 relative">
              <input
                className="border border-[#ccc] outline-none text-[14px] py-2.5 px-6 rounded-full w-full"
                type="text"
                placeholder="Search product..."
              />
              <SearchIcon
                className="absolute top-1/2 -translate-y-1/2 right-4 text-[#808080]"
                sx={{ fontSize: 20 }}
              />
            </div>
          </div>

          <div className="lg:flex hidden lg:items-center items-end gap-6 sm:gap-5">
            {true ? (
              <div className="flex gap-10">
                <ul className="hidden lg:flex items-center gap-8 text-md font-medium text-gray-800">
                  {["Men", "Women", "Electronics"].map((c) => (
                    <li
                      key={c}
                      className="cursor-pointer hover:text-var(--primary-color) transition-all duration-300 hover:border-var(--primary-color) border-b-2 mt-1 text-[15px]! border-transparent"
                    >
                      {c}
                    </li>
                  ))}

                  <Link
                    to={
                      "SELLER" == "SELLER"
                        ? "/seller"
                        : "SELLER" == "ADMIN"
                          ? "/admin/categories"
                          : "/become-seller"
                    }
                    className="bg-black hover:bg-white border transition-all duration-100   hover:text-black px-6 py-3 text-[14px] font-medium rounded-xl text-white"
                  >
                    {"SELLER" == "SELLER"
                      ? "Seller Dashboard"
                      : user?.role == "ADMIN"
                        ? "Admin Dashboard"
                        : "Become a Seller"}
                  </Link>
                </ul>

                <ul className="lg:flex hidden gap-4 items-center">
                  <li>
                    <Tooltip
                      className="cursor-pointer"
                      onClick={() => navigate("/wishlist")}
                      title="Wishlist"
                      arrow
                    >
                      <p>
                        <img className="w-5.25" src={heartIcon} alt="" />
                      </p>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip
                      className="cursor-pointer"
                      onClick={() => navigate("/account")}
                      title="Profile"
                      arrow
                    >
                      <p>
                        <img className="w-4.25" src={userIcon} alt="" />
                      </p>
                    </Tooltip>
                  </li>
                  <li className="relative">
                    <Tooltip
                      className="cursor-pointer"
                      onClick={() => navigate("/cart")}
                      title="Cart"
                      arrow
                    >
                      <p>
                        <img className="w-5" src={bagIcon} alt="" />
                        <span className="bg-black -top-1 -right-2 h-4 flex justify-center text-[10px] font-medium text-white items-center w-4 rounded-full absolute">
                          1
                        </span>
                      </p>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-black  hover:bg-white border transition-all duration-100 hover:text-black   px-6 py-1.5 text-[14px] font-medium rounded-full text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </Box>
    </>
  );
};

export default Navbar;
