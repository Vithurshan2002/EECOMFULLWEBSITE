import React from "react";

const Shipping = () => {
  return (
    <div className="bg-blue-200 h-screen flex flex-col items-center justify-center pt-30 md:pt-0">
      <div className=" p-10 bg-white ">
        <h1 className="text-3xl font-extrabold py-3 text-blue-800  text-shadow-lime-900">
          Shipping Infor
        </h1>
        <div className="py-2">
          <p className="font-semibold text-xl font-mono">Address</p>
          <div>
            <input
              type="text"
              className="outline-0 ps-1 border-blue-700 border-2 rounded"
            />
          </div>
        </div>
        <div className="py-2">
          <p className="font-semibold text-xl font-mono">City</p>
          <div>
            <input
              type="text"
              className="outline-0 ps-1 border-blue-700 border-2 rounded"
            />
          </div>
        </div>
        <div className="py-2">
          <p className="font-semibold text-xl font-mono">Phone No</p>
          <div>
            <input
              type="text"
              className="outline-0 ps-1 border-blue-700 border-2 rounded"
            />
          </div>
        </div>
        <div className="py-2">
          <p className="font-semibold text-xl font-mono">Postal Code</p>
          <div>
            <input
              type="text"
              className="outline-0 ps-1 border-blue-700 border-2 rounded"
            />
          </div>
        </div>
        <div className="py-2">
          <p className="font-semibold text-xl font-mono">Country</p>

          <select className=" w-48 font-bold bg-white border-blue-700 border-2 rounded">
            <option>Srilanka</option>
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
          </select>
        </div>
        <button className="bg-yellow-400 w-full mt-3 rounded-full font-bold hover:cursor-pointer hover:bg-amber-200">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Shipping;
