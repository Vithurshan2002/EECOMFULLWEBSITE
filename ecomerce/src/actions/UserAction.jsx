import React from "react";
import axios from "axios";
import { LoginRequest, LoginSuccess, LoginFail ,clearError, RegisterRequest, RegisterSuccess, RegisterFail} from "../Slices/AuthSlice";
import { Avatar } from "@mui/material";
export const getLogin = (email,password) => async (dispatch) => {
  try {
    dispatch(LoginRequest())
    const {data}= await axios.post("http://localhost:3000/api/login",{email,password});
    console.log(data.message);
    dispatch(LoginSuccess(data.message))
  } catch (error) {
    dispatch(LoginFail(error.response.data.message));
    console.log(error);
  }
};

export const ClearAuthError=()=>(dispatch)=>{
    dispatch(clearError())
}

export const getRegister = (name,email,password) => async (dispatch) => {
  try {
    dispatch(RegisterRequest())
    const {data}= await axios.post("http://localhost:3000/api/register",{name,email,password});
    console.log(data.message);
    dispatch(RegisterSuccess(data.message))
  } catch (error) {
    dispatch(RegisterFail(error.response.data.message));
    console.log(error);
  }
};
 