import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { userLogout } from "../actions/UserAction";
const Navbar = () => {
  const navigate = useNavigate();
  const [keyword, setkeyword] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);
    /*  setkeyword(""); */
  };

  const { isAuthenticated, loading } = useSelector((state) => state.AuthState);

  const dispatch = useDispatch();
  const logout =async () => {
  await dispatch(userLogout());
   navigate('/login')
  };

  return (
    <div className="bg-black flex flex-col md:flex-row justify-between items-center py-4 px-5 fixed top-0 w-full">
      <Link to={"/"}>
        {" "}
        <h1 className="text-4xl font-bold text-white font-serif">
          Ultra <span className="text-red-300"> Ecom</span>
        </h1>
      </Link>
      <form onSubmit={searchHandler}>
        <div className="flex border p-1 space-x-1 bg-white rounded-full items-center  outline-green-900 active:outline-4 transition-all my-5 md:my-0">
          <input
            type="text"
            value={keyword}
            onChange={(e) => {
              setkeyword(e.target.value);
            }}
            className="bg-white outline-0 ps-3 rounded-2xl italic font-semibold overflow-hidden flex-1"
            placeholder="Enter the Product"
          />
          <button>
            {
              <FaSearch className="text-red-600 hover:cursor-pointer text-xl hover:text-green-700" />
            }
          </button>
        </div>
      </form>
      <div className="flex space-x-4  items-center  font-serif">
        {isAuthenticated ? (
          <p
            className="bg-red-400 py-1 px-3 font-bold text-white rounded-xl  hover:cursor-pointer hover:bg-red-200"
            onClick={logout}
          >
            Log Out
          </p>
        ) : (
          <Link to={"/login"}>
            {" "}
            <button className="bg-green-400 py-1 px-3 font-bold text-white rounded-xl  hover:cursor-pointer hover:bg-green-300">
              Login
            </button>
          </Link>
        )}

        <div className="flex gap-2 items-center text-white">
          <p className="font-bold">Cart</p>
          <p className=" p-1 bg-green-500">1</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
