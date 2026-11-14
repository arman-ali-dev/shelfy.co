import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Account from "./pages/Account/Account";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Wishlist from "./pages/Wishlist/Wishlist";
import NotFound from "./pages/404/NotFound";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import OrderSuccess from "./pages/Checkout/OrderSuccess";
import Review from "./pages/Review/Review";
import SellerDashboard from "./pages/Seller/SellerDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";

const App = () => {
  const location = useLocation();

  const hideHeaderPaths = [
    "/login",
    "/register",
    "/become-seller",
    "/order-placed",
    "/admin/login",
  ];
  const hideFooterPaths = [
    "/login",
    "/register",
    "/become-seller",
    "/order-placed",
  ];

  const isNotFound =
    ![
      "/",
      "/product-details",
      "/register",
      "/login",
      "/wishlist",
      "/cart",
      "/checkout",
      "/order-placed",
      "/reviews",
    ].includes(location.pathname) &&
    !location.pathname.startsWith("/account") &&
    !location.pathname.startsWith("/seller") &&
    !location.pathname.startsWith("/admin");

  const hideHeader = hideHeaderPaths.includes(location.pathname);

  const hideFooter =
    hideFooterPaths.includes(location.pathname) ||
    location.pathname.startsWith("/account") ||
    location.pathname.startsWith("/seller") ||
    location.pathname.startsWith("/admin");

  return (
    <>
      {!hideHeader && !isNotFound && (
        <>
          <Header />
          <Navbar />
        </>
      )}

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ProductDetails />} path="/product-details" />
        <Route element={<Account />} path="/account/*" />
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<Wishlist />} path="/wishlist" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Checkout />} path="/checkout" />
        <Route element={<OrderSuccess />} path="/order-placed" />
        <Route element={<Review />} path="/reviews" />
        <Route element={<SellerDashboard />} path="/seller/*" />
        <Route element={<AdminDashboard />} path="/admin/*" />
        <Route element={<NotFound />} path="*" />
      </Routes>

      {!hideFooter && !isNotFound && <Footer />}
    </>
  );
};

export default App;
