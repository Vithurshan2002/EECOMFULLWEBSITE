import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../Slices/ProductsSlice";
import ProductReducer from "../Slices/ProductSlice";
import SearchProductReducer from "../Slices/SearchProductSlice";
import AuthReducer from "../Slices/AuthSlice";
import cartReducer from "../Slices/CartSlice";
import OrderPrice from "../Slices/OrderSlice";
const Store = configureStore({
  reducer: {
    productsState: ProductsReducer,
    productState: ProductReducer,
    searchProductState:SearchProductReducer,
    AuthState:AuthReducer,
    CartState:cartReducer,
    Order:OrderPrice,


  },
});
export default Store;
