import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import getProducts from "../actions/ProductActions";
import Lorder from "./Lorder";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts(dispatch);
  }, []);

  const { products, loading } = useSelector((state) => state.productsState);

  
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
