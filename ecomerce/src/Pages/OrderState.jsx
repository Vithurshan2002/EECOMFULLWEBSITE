import React from "react";
import "./SuccessMessage.css";
import { useNavigate } from "react-router-dom";
const OrderState = () => {
     const navigate=useNavigate()
  return (
   
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center">

        <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mx-auto animate-spin-scale">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

    
        <div className="mt-6 opacity-0 animate-fade-in-delay">
          <h2 className="text-2xl font-bold text-gray-800">Order Successful!</h2>
          <p className="text-gray-600 mt-2">
            Thank you for your purchase. Your order has been placed successfully.
          </p>
          <button onClick={()=>(navigate('/'))} className="mt-6 px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderState;
