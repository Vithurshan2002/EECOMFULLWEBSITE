import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
 import { toast } from 'react-toastify';
import Lorder from "./Lorder";
import { useParams } from "react-router-dom";
import getsearchProducts from "../actions/SearchProductAction";
import NotAvalable from "./NotAvalable";
const SearchItems = () => {
  const dispatch = useDispatch();
 const{keyword}= useParams();

  const { products, loading, error } = useSelector(
    (state) => state.searchProductState
  );

  useEffect(() => {
    if(error){
     return  toast.error(error, {position: "top-center",autoClose: 5000,hideProgressBar: false,closeOnClick: false,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored"});
    }
    dispatch(getsearchProducts(keyword));
  }, [error,keyword]);

  return (
    <div>
      {loading ? (
        <Lorder />
      ) : (
        <div className="md:mt-35 mt-50 mb-40">
          <h1 className="font-semibold text-4xl">Search Products</h1>
          <div className="grid  md:grid-cols-3 gap-5 px-10 pt-10">
            {products.length>0?
              products.map((data, key) => {
                return <Product data={data} key={key} />;
              }):<NotAvalable/>}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchItems;
