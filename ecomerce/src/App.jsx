import "./App.css";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDeatil from "./Pages/ProductDeatil";
import SearchItems from "./Pages/SearchItems";
import Login from "./Pages/user/Login";
import Register from "./Pages/user/Register";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userDataLoader } from "./actions/UserAction";

function App() {
  //why userloade date call here becase app.jsx is amin file..so ella payilukumpothuva kudukanum enpatha l .app.jsx thne inku main file so athuku kudutham
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userDataLoader)
  });

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
