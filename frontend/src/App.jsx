import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Account from "./pages/Account/Account";

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

  const hideHeader = hideHeaderPaths.includes(location.pathname);

  const hideFooter =
    hideFooterPaths.includes(location.pathname) ||
    location.pathname.startsWith("/account") ||
    location.pathname.startsWith("/seller") ||
    location.pathname.startsWith("/admin");
  return (
    <>
      {!hideHeader && (
        <>
          <Header />
          <Navbar />
        </>
      )}

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ProductDetails />} path="/product-details" />
        <Route element={<Account />} path="/account/*" />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
};

export default App;
