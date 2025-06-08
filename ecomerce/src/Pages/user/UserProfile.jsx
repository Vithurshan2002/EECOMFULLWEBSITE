import React from "react";
import Img from '../../../public/images/user/a.png'
const UserProfile = () => {
  return (
    <div className="flex  flex-col md:flex-row items-center justify-center h-screen mb-10 md:mt-0 mt-35">
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-gray-600 h-60 w-60 rounded-full">
            <img src={Img}alt="no image" />
        </div>
      </div>
      <div className="w-1/2">
        <div className="py-2 ">
          <h1 className="font-bold text-2xl font-serif">Full Name</h1>
          <p className="font-semibold text-xl text-gray-700 ms-1">Vithurshan</p>
        </div>
        <div className="py-2">
          <h1  className="font-bold text-2xl font-serif">Email Address</h1>
          <p className="font-semibold text-xl text-gray-700 ms-1">sangervITHU@GMAIL.COM</p>
        </div>
        <div className="py-2">
          <h1 className="font-bold text-2xl font-serif">Joined</h1>
          <p className="font-semibold text-xl ms-1 text-gray-700">27.10.2023</p>
        </div>
        <button className=" block bg-green-600 hover:bg-green-300 rounded hover:cursor-pointer my-4 w-3/4">My Orders</button>
        <button className=" block bg-blue-600 hover:bg-blue-300 rounded w-3/4 hover:cursor-pointer">Change Password</button>
      </div>
    </div>
  );
};

export default UserProfile;
