import ListIcon from "@mui/icons-material/List";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddIcon from "@mui/icons-material/Add";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Divider } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import RevenueChart from "./RevenueChart/RevenueChart";
import Orders from "./Orders/Orders";
import Products from "./Products/Products";

const menu = [
  {
    name: "Dashboard",
    path: "/seller",
    icon: <DashboardIcon className="text-black" />,
    activeIcon: <DashboardIcon className="text-white" />,
  },
  {
    name: "Orders",
    path: "/seller/orders",
    icon: <ShoppingBagIcon className="text-black" />,
    activeIcon: <ShoppingBagIcon className="text-white" />,
  },
  {
    name: "Products",
    path: "/seller/products",
    icon: <InventoryIcon className="text-black" />,
    activeIcon: <InventoryIcon className="text-white" />,
  },
  {
    name: "Add Product",
    path: "/seller/add-product",
    icon: <AddIcon className="text-black" />,
    activeIcon: <AddIcon className="text-white" />,
  },
  {
    name: "Payment",
    path: "/seller/payment",
    icon: <AccountBalanceWalletIcon className="text-black" />,
    activeIcon: <AccountBalanceWalletIcon className="text-white" />,
  },
  {
    name: "Transaction",
    path: "/seller/transactions",
    icon: <ReceiptIcon className="text-black" />,
    activeIcon: <ReceiptIcon className="text-white" />,
  },
];

const menu2 = [
  {
    name: "Account",
    path: "/seller/account",
    icon: <AccountBoxIcon className="text-black" />,
    activeIcon: <AccountBoxIcon className="text-white" />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <LogoutIcon className="text-black" />,
    activeIcon: <LogoutIcon className="text-white" />,
  },
];

const SellerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="lg:hidden flex items-center justify-between px-4 py-2 border-b border-gray-300 bg-white shadow-sm sticky top-0 z-30">
        <h2 className="text-md font-semibold">Seller Dashboard</h2>
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
                      : handleNavigate(elem.path)
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
            <Route path="/" element={<RevenueChart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default SellerDashboard;
