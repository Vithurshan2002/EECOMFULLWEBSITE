import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading:false,
  isAuthenticated:false
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers:{
    LoginRequest:(state,action)=>{
        return{
              loading:true,
               isAuthenticated:false
        }
    },
    LoginSuccess:(state,action)=>{
      return{
        loading:false,
        isAuthenticated:true,
        user:action.payload
      }
    },
    LoginFail:(state,action)=>{
     return{
        loading:false,
       isAuthenticated:false,
       error:action.payload
    }},
     clearError:(state,action)=>{
     return{
        loading:false,
       isAuthenticated:false,
       error:null
    }},
}});


export const{LoginRequest,LoginSuccess,LoginFail,clearError}=AuthSlice.actions;


export default AuthSlice.reducer;




