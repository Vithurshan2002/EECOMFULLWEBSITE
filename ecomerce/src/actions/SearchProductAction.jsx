import React from "react";
import axios from "axios";
import { SearchproductsFail, SearchproductsRequest, SearchproductsSuccess } from "../Slices/SearchProductSlice";

const getsearchProducts = keyword => async (dispatch) => {
  try {
    dispatch(SearchproductsRequest())
    const {data}= await axios.post(`http://localhost:3000/api/findproduct?keyword=${keyword}`);
    console.log(data.message);
    dispatch(SearchproductsSuccess(data.message))
  } catch (error) {
    dispatch(SearchproductsFail(error.response.data.message));
    console.log(error);
  }
};

export default getsearchProducts;
 