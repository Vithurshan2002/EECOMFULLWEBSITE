import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading:false,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers:{
    productsRequest:(state,action)=>{
        return{
              loading:true
        }
    },
    productsSuccess:(state,action)=>{
      return{
        loading:false,
        products:action.payload
      }
    },
    productsFail:(state,action)=>{
     return{
        loading:false,
        products:action.payload
    }},
}});


export const{productsRequest,productsSuccess,productsFail}=productsSlice.actions;


export default productsSlice.reducer;




