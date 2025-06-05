import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
 import { toast } from 'react-toastify';
import getProducts from "../actions/ProductsActions";
import Lorder from "./Lorder";
const Home = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.productsState
  );

  useEffect(() => {
    if(error){
     return  toast.error(error, {position: "top-center",autoClose: 5000,hideProgressBar: false,closeOnClick: false,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored"});
    }
    getProducts(dispatch);
  }, [error]);

  return (
    <div>
      {loading ? (
        <Lorder />
      ) : (
        <div className="md:mt-35 mt-50 mb-40">
          <h1 className="font-semibold text-4xl">Latest Products</h1>
          <div className="grid  md:grid-cols-3 gap-5 px-10 pt-10">
            {products &&
              products.map((data, key) => {
                return <Product data={data} key={key} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
