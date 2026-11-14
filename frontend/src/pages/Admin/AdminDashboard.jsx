import ListIcon from "@mui/icons-material/List";

import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import Groups2Icon from "@mui/icons-material/Groups2";
import { Divider } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import Category from "./Category/Category";
import AddCategory from "./Category/AddCategory";
import CouponCodes from "./CouponCodes/CouponCodes";
import AddCouponCode from "./CouponCodes/AddCouponCode";

const menu = [
  {
    name: "Categories",
    path: "/admin/categories",
    icon: <SpaceDashboardOutlinedIcon className="text-black" />,
    activeIcon: <SpaceDashboardIcon className="text-white" />,
  },
  {
    name: "Add Category",
    path: "/admin/add-category",
    icon: <AddIcon className="text-black" />,
    activeIcon: <AddIcon className="text-white" />,
  },
  {
    name: "Coupon Codes",
    path: "/admin/coupons",
    icon: <LocalOfferOutlinedIcon className="text-black" />,
    activeIcon: <LocalOfferIcon className="text-white" />,
  },
  {
    name: "Add Coupon",
    path: "/admin/add-coupon",
    icon: <AddIcon className="text-black" />,
    activeIcon: <AddIcon className="text-white" />,
  },
  {
    name: "Sellers",
    path: "/admin/sellers",
    icon: <StoreOutlinedIcon className="text-black" />,
    activeIcon: <StoreMallDirectoryIcon className="text-white" />,
  },

  {
    name: "Users",
    path: "/admin/users",
    icon: <Groups2OutlinedIcon className="text-black" />,
    activeIcon: <Groups2Icon className="text-white" />,
  },
];

const menu2 = [
  {
    name: "Logout",
    path: "/",
    icon: <LogoutIcon className="text-black" />,
    activeIcon: <LogoutIcon className="text-white" />,
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="lg:hidden flex items-center justify-between px-4 py-2 border-b border-gray-300 bg-white shadow-sm sticky top-0 z-30">
        <h2 className="text-md font-semibold">Admin Dashboard</h2>
        <button className="p-2 rounded-md hover:bg-gray-100 transition">
          <ListIcon />
        </button>
      </div>

      <div className="lg:flex lg:h-[90vh]">
        <div className="fixed inset-0 bg-black/40 bg-opacity-40 z-30 lg:hidden"></div>

        <section
          className={`fixed lg:static top-0 left-0 h-full bg-white z-40 lg:z-0 border-r border-gray-300 
            transform ${
              true ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          <div className="h-[84vh] w-67.5 sm:w-75 flex flex-col justify-between py-5">
            <div className="space-y-2">
              {menu.map((elem, index) => (
                <div
                  onClick={() => navigate(elem.path)}
                  className="cursor-pointer pr-7"
                  key={index}
                >
                  <p
                    className={`${
                      elem.path === location.pathname
                        ? "bg-black text-white"
                        : "text-black"
                    } flex items-center gap-3 px-5 py-3 rounded-r-full transition-all`}
                  >
                    {elem.path === location.pathname
                      ? elem.activeIcon
                      : elem.icon}
                    <p className="mt-1">{elem.name}</p>
                  </p>
                </div>
              ))}
            </div>
            <Divider />
            <div className="space-y-2">
              {menu2.map((elem, index) => (
                <div
                  onClick={() =>
                    elem.name === "Logout"
                      ? handleLogout()
                      : navigate(elem.path)
                  }
                  className="cursor-pointer pr-7"
                  key={index}
                >
                  <p
                    className={`${
                      elem.path === location.pathname
                        ? "bg-black text-white"
                        : "text-black"
                    } flex items-center gap-3 px-5 py-3 rounded-r-full transition-all`}
                  >
                    {elem.path === location.pathname
                      ? elem.activeIcon
                      : elem.icon}
                    <p>{elem.name}</p>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-6 sm:p-8 w-full lg:w-[80%] overflow-y-auto bg-gray-50 min-h-screen lg:min-h-[90vh]">
          <Routes>
            <Route path="/categories" element={<Category />} />
            <Route path="/add-category" element={<AddCategory />} />
            <Route path="/coupons" element={<CouponCodes />} />
            <Route path="/add-coupon" element={<AddCouponCode />} />
            {/*
            <Route path="/users" element={<Users />} />
            <Route path="/sellers" element={<Sellers />} /> */}
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
