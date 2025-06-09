import React, { useEffect, useState } from "react";
import { getLogin, ClearAuthError } from "../../actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.AuthState
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(getLogin(email, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (error) {
      toast(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type: "error",
        onOpen: () => {
          dispatch(ClearAuthError());
        },
      });
      return;
    }
  }, [error, isAuthenticated, dispatch,navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg- bg-gray-200">
      <div className="bg-white p-8 border-gray-500  shadow-2xl mt-30 md:mt-0">
        <form onSubmit={submitHandler}>
          <h1 className="text-4xl py-2 font-bold text-red-400">Login</h1>
          <div className="py-1">
            <p className="font-medium ">Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="outline-none border-2 rounded-full border-green-600 ps-2 font-medium font-mono"
            />
          </div>
          <div className="py-1">
            <p className="font-medium">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className="outline-none border-2 rounded-full border-green-600 ps-2 font-medium font-mono"
            />
          </div>
          <p className="text-sm text-right pt-3 font-medium underline underline-offset-2 hover:cursor-pointer">
            Forgot Password?
          </p>
          <button
            disabled={loading}
            className=" bg-green-600 p-1 w-full my-4 rounded-full font-semibold hover:cursor-pointer hover:bg-green-400 "
          >
            Login
          </button>
          <Link to={"/register"}>
            {" "}
            <p className=" mt-4 text-xs font-bold text-right underline hover:cursor-pointer hover:text-red-400">
              New User?
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
