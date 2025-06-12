
import axios from "axios";
import { createOrderFail, createOrderRequest, createOrderSuccess } from "../Slices/OrderSlice";

const createOrder= orderData => async (dispatch) => {
  try {
    dispatch(createOrderRequest())
    const {data}= await axios.post(`http://localhost:3000/api/order/neworder`,orderData);
    console.log(data.message);
    dispatch(createOrderSuccess(data.message))
  } catch (error) {
    dispatch(createOrderFail(error.response.data.message));
    console.log(error);
  }
};

export default createOrder;
 