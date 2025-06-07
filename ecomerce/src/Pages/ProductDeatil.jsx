import { Rating } from "@mui/material";
import Img1 from '../../public/images/products/head.jpg'
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getProduct from "../actions/ProductAction";
import Lorder from "./Lorder";
const ProductDeatil = () => {
  const [count, setcount] = useState(0);
  const { id } = useParams();
  const { product, error, loading } = useSelector(
    (state) => state.productState
  );
  const Dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    Dispatch(getProduct(id));
  }, [error]);

  return (
    <div>
      {loading ? (
        <Lorder />
      ) : (
        <div className="flex pb-10 md:pt-30 pt-40 justify-center flex-col md:flex-row  my-10">
          <img
            src={Img1}
            alt="no image"
            className="border flex-1 md:m-40 m-15 md:h-100 h-50 w-80"
          /> 
          <div className="flex-1 me-20 mx-20">
            <h1 className="md:text-4xl text-2xl py-5">
             {product.name}
            </h1>
            <p className="text-xs">Product # {product._id}</p>
            <div className="py-5 flex items-center gap-5 ">
               <Rating
              name="half-rating-read"
              defaultValue={product.ratings}
              precision={0.5}
              readOnly
              className=" -z-10"
            />
              <div> ({product.numOfReviews} Reviews)</div>
            </div>
            <h1 className="py-5 text-3xl font-bold">${product.price}</h1>
            <div className="py-2 flex gap-2">
              <div className="flex items-center ">
                <div
                  className="bg-red-500 px-1.5 rounded-2xl font-extrabold hover:cursor-pointer"
                  onClick={() => setcount((pre) => Number(pre) - 1)}
                >
                  -
                </div>
                <div>
                  <input
                    type="text"
                    value={count}
                    readOnly={true}
                    className="w-10 outline-0 border-2 rounded-full text-center"
                  />
                </div>
                <div
                  className="bg-red-500 px-1 rounded-2xl font-extrabold hover:cursor-pointer"
                  onClick={() => {
                    setcount((pre) => Number(pre) + 1);
                  }}
                >
                  +
                </div>
              </div>
              <button className="bg-green-400 hover:bg-green-300  p-2 rounded-full hover:cursor-pointer font-bold">
                Add to Cart
              </button>
            </div>
            <p className="py-5">Status: {product.stock>0 ?<p className="inline">In Stock</p>:<p className="inline">OutOf Stock</p>}</p>
            <h1 className="py-2 text-xl">Description</h1>
            <p className="text-sm">
             {product.description}
            </p>
            <p className="py-3">Sold by : {product.seller}</p>
            <button className="bg-orange-400 text-white hover:bg-orange-300 p-2 rounded-full hover:cursor-pointer font-bold">
              Submit Your Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDeatil;
