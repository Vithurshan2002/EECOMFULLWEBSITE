import {configureStore} from '@reduxjs/toolkit';
import Product from '../Slices/ProductSlice';

const Store=configureStore({
    reducer:{
        productsState:Product,
    }
})
export default Store;