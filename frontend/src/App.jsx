import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
