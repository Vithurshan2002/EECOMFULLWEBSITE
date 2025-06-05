import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../Slices/ProductsSlice";
import ProductReducer from "../Slices/ProductSlice";
const Store = configureStore({
  reducer: {
    productsState: ProductsReducer,
    productState: ProductReducer,
  },
});
export default Store;
