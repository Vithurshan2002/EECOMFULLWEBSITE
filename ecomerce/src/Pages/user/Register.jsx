import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegister } from "../../actions/UserAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { loading, error, isRegisterd } = useSelector(
    (state) => state.AuthState
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRegister(name, email, password));
  };

  useEffect(() => {
    if (isRegisterd) {
      navigate("/login");
     
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
      });
      return;
    }
  }, [error, isRegisterd]);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="bg-white md:p-15 p-6 md:my-0 mt-30">
        <form onSubmit={handleSubmit}>
          <h1 className="text-4xl py-2 font-bold">Register</h1>
          <div className="py-1">
            <p>Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              className="outline-none border-2 border-blue-700 ps-1 rounded font-mono"
            />
          </div>
          <div className="py-1">
            <p>Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="outline-none border-2 border-blue-700 ps-1 rounded font-mono"
            />
          </div>
          <div className="py-1">
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className="outline-none border-2 border-blue-700 ps-1 rounded font-mono"
            />
          </div>
          <button
            disabled={loading}
            className="bg-orange-400 w-full mt-5 py-1 rounded-full hover:bg-orange-300 hover:cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
