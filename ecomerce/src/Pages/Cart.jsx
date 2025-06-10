import React, { Fragment } from "react";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeItemFRomcart } from "../Slices/CartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
   const dispatch= useDispatch()
  const { items } = useSelector((state) => state.CartState);
  return (
    <div className="bg-gray-200 md:py-20  h-screen py-40">
      <p className="text-3xl py-10 px-12">
        Your Cart:<span className="font-bold"> {items.length} Items</span>
      </p>

      <div className="flex flex-col md:flex-row md:mx-10 mx-4 gap-7 ">
        <div className="flex flex-col gap-3 md:w-3/4">
          {/*  */}
          {items.map((data, key) => {
            return (
              <Fragment key={key}>
                <div className="flex md:gap-10 gap-2 border-x-black bg-white  items-center justify-center md:p-5 px-3  border-green-600 border-4 rounded shadow-2xl shadow-black">
                  <div className="flex-1 ">
                    <img src={data.image} alt="no image" className=" h-30 w-fit" />
                  </div>
                <Link to={`/product/${data.product}`}>  <p className="font-bold md:text-xl flex-1 hover:text-blue-700">
                    {data.name}
                  </p></Link>
                  <p className="text-red-600 font-extrabold md:text-2xl">
                    ${data.price}
                  </p>

                  <div className="flex items-center">
                    <div  onClick={()=>dispatch(decreaseQty(data.product))} className="bg-green-500 px-1.5 rounded-2xl font-extrabold hover:cursor-pointer">
                      -
                    </div>
                    <div>
                      <input
                        type="text"
                        value={data.quantity}
                        readOnly={true}
                        className="w-10 outline-0 border-2 rounded-full text-center"
                      />
                    </div>
                    <div  onClick={()=>dispatch(increaseQty(data.product))}  className="bg-green-500 px-1 rounded-2xl font-extrabold hover:cursor-pointer">
                      +
                    </div>
                  </div>
                  <div>
                    <TiDelete onClick={()=>dispatch(removeItemFRomcart(data.product))} className="text-red-500 -z-50  hover:cursor-pointer animate-pulse text-3xl transition-all" />
                  </div>
                </div>
              </Fragment>
            );
          })}

        
        </div>

        <div className="md:w-1/4 border-2 h-fit">
          <h1 className="text-2xl text-center text-green-950 font-extrabold py-2">
            Order Summary
          </h1>
          <div className="flex justify-around">
            <p className="font-semibold text-xl">SubTotal</p>
            <p className="font-extrabold">{items.reduce((acc,item)=>(acc+item.quantity),0)} (Units) </p>
          </div>
          <div className="flex justify-around">
            <p className="font-semibold text-xl">Est.Total</p>
             <p className="font-extrabold">$ {items.reduce((acc,item)=>(acc+item.price*item.quantity),0).toFixed(2)}  </p>
            
          </div>
          <div className="flex justify-center py-5 ">
            {" "}
           <Link to={'/shipping'}> <button className="bg-orange-400   hover:cursor-pointer px-2 hover:bg-green-200 hover:text-black font-semibold  rounded-full animate-pulse text-white border-2">
              CheckOut
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
