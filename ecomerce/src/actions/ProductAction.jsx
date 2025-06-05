import React from "react";
import axios from "axios";
import { productFail, productRequest, productSuccess } from "../Slices/ProductSlice";
const getProduct = id => async (dispatch) => {
  try {
    dispatch(productRequest())
    const {data}= await axios.get(`http://localhost:3000/api/singleproduct/${id}`);
    console.log(data.message);
    dispatch(productSuccess(data.message))
  } catch (error) {
    dispatch(productFail(error.response.data.message));
    console.log(error);
  }
};

export default getProduct;
 