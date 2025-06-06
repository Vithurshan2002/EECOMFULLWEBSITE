import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading:false,
  product:{}
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers:{
    productRequest:(state,action)=>{
        return{
              loading:true
        }
    },
    productSuccess:(state,action)=>{
      return{
        loading:false,
        product:action.payload
      }
    },
    productFail:(state,action)=>{
     return{
        loading:false,
        product:action.payload
    }},
}});


export const{productRequest,productSuccess,productFail}=productSlice.actions;


export default productSlice.reducer;




