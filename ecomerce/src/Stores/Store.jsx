import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../Slices/ProductsSlice";
import ProductReducer from "../Slices/ProductSlice";
import SearchProductReducer from "../Slices/SearchProductSlice";
import AuthReducer from "../Slices/AuthSlice";
const Store = configureStore({
  reducer: {
    productsState: ProductsReducer,
    productState: ProductReducer,
    searchProductState:SearchProductReducer,
    AuthState:AuthReducer

  },
});
export default Store;
