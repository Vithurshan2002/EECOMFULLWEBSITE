import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../Slices/ProductsSlice";
import ProductReducer from "../Slices/ProductSlice";
import SearchProductReducer from "../Slices/SearchProductSlice";
const Store = configureStore({
  reducer: {
    productsState: ProductsReducer,
    productState: ProductReducer,
    searchProductState:SearchProductReducer
  },
});
export default Store;
