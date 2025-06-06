import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading:false,
};

const SearchproductsSlice = createSlice({
  name: "Searchproducts",
  initialState: initialState,
  reducers:{
    SearchproductsRequest:(state,action)=>{
        return{
              loading:true
        }
    },
    SearchproductsSuccess:(state,action)=>{
      return{
        loading:false,
        products:action.payload
      }
    },
    SearchproductsFail:(state,action)=>{
     return{
        loading:false,
        products:action.payload
    }},
}});


export const{SearchproductsRequest,SearchproductsSuccess,SearchproductsFail}=SearchproductsSlice.actions;


export default SearchproductsSlice.reducer;




