import "./App.css";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDeatil from "./Pages/ProductDeatil";
import SearchItems from "./Pages/SearchItems";
import Login from "./Pages/user/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDeatil />} />
          <Route path="/search/:keyword" element={<SearchItems />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
