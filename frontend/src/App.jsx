import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ProductDetails />} path="/product-details" />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
