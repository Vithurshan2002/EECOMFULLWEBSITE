import React from "react";
import axios from "axios";
import { productsFail, productsRequest, productsSuccess } from "../Slices/ProductSlice";
const getProducts = async (dispatch) => {
  try {
    dispatch(productsRequest())
    const {data}= await axios.get("http://localhost:3000/api/allproducts");
    console.log(data.message);
    dispatch(productsSuccess(data.message))
  } catch (error) {
    dispatch(productsFail(error.response.data.message));
    console.log(error);
  }
};

export default getProducts;
 