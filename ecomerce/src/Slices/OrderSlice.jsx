import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 orderDetails:{},
 userOrder:[],
 loading:false
};
const OrderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
   createOrderRequest: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    createOrderSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        orderDetails:action.payload
      };
    },
    createOrderFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error:action.payload
      };
    },

   

  },
});

export const { createOrderRequest, createOrderSuccess,createOrderFail} = OrderSlice.actions;

export default OrderSlice.reducer;

