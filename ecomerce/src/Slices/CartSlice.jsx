import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems") || "[]"),
  loading: false,
  shippingInfor:JSON.parse(localStorage.getItem("shippingInfor") || "{}")
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addcartitemRequest: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    addcartitemsSuccess: (state, action) => {
      const item = action.payload;

      const itemalredyexist = state.items.find(
        (i) => i.product == item.product
      );
      if (itemalredyexist) {
        state = { ...state, loading: false };
      } else {
        state = {
          items: [...state.items, item],
          loading: false,
        };
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
      return state;
    },
    increaseQty: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.product == action.payload) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    decreaseQty: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.product == action.payload) {
          item.quantity = item.quantity- 1;
        }
        return item;
      });
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItemFRomcart:(state,action)=>{
        const filterItems=state.items.filter(item =>{
            return item.product !==action.payload
        })
        localStorage.setItem("cartItems", JSON.stringify(filterItems));
        return {
            ...state,items:filterItems
        }
    },
    saveShippingInfor:(state,action)=>{
        localStorage.setItem("shippingInfor", JSON.stringify(action.payload));
        return {
          ...state,
          shippingInfor:action.payload

        }
    }

  },
});

export const { addcartitemRequest, addcartitemsSuccess,decreaseQty,increaseQty,removeItemFRomcart,saveShippingInfor} = cartSlice.actions;

export default cartSlice.reducer;
addcartitemRequest;
