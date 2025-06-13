import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countries } from "countries-list";
import { saveShippingInfor } from "../Slices/CartSlice";
import { useNavigate } from "react-router-dom";
const Shipping = () => {
  const { shippingInfor={} } = useSelector((state) => state.CartState);
  const [city, setcity] = useState(shippingInfor.city);
  const [address, setaddress] = useState(shippingInfor.address);
  const [phoneNo, setPhoneNo] = useState(shippingInfor.phoneNo);
  const [postalCode, setPostalCode] = useState(shippingInfor.postalCode);
  const [country, setcountry] = useState(shippingInfor.country);
  const [state, setState] = useState(shippingInfor.state);

  const countryList = Object.values(countries); //from npm pakage-- contrues valuesa madum edukuram arrka varum
  const dispatch = useDispatch();
  const navigae = useNavigate();

  const submithandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingInfor({ address, city, phoneNo, postalCode, country, state })
    );
    navigae("/orderconfirmation");
  };
  return (
    <div className="bg-blue-200  flex flex-col items-center justify-center md:py-30 py-50">
      <div className=" p-10 bg-white ">
        <form onSubmit={submithandler}>
          <h1 className="text-3xl  font-extrabold py-3 text-blue-800  text-shadow-lime-900">
            Shipping Infor
          </h1>
          <div className="py-2">
            <p className="font-semibold text-xl font-mono">Address</p>
            <div>
              <input
                type="text"
                value={address}
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
                className="outline-0 ps-1 border-blue-700 border-2 rounded"
             required />
            </div>
          </div>
          <div className="py-2">
            <p className="font-semibold text-xl font-mono">City</p>
            <div>
              <input
                type="text"
                value={city}
                onChange={(e) => {
                  setcity(e.target.value);
                }}
                className="outline-0 ps-1 border-blue-700 border-2 rounded"
            required  />
            </div>
          </div>
          <div className="py-2">
            <p className="font-semibold text-xl font-mono">Phone No</p>
            <div>
              <input
                type="text"
                value={phoneNo}
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
                className="outline-0 ps-1 border-blue-700 border-2 rounded"
              required/>
            </div>
          </div>
          <div className="py-2">
            <p className="font-semibold text-xl font-mono">Postal Code</p>
            <div>
              <input
                type="text"
                value={postalCode}
                onChange={(e) => {
                  setPostalCode(e.target.value);
                }}
                className="outline-0 ps-1 border-blue-700 border-2 rounded"
             required />
            </div>
          </div>
          <div className="py-2">
            <p className="font-semibold text-xl font-mono">Country</p>

            <select
              value={country}
              onChange={(e) => {
                setcountry(e.target.value);
              }}
              className=" w-48 font-bold bg-white border-blue-700 border-2 rounded"
            required>
              {countryList.map((country, key) => {
                return (
                  <option key={key} value={country.name}>
                    {country.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="py-2">
            <p className="font-semibold text-xl font-mono">State</p>
            <div>
              <input
                type="text"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
                className="outline-0 ps-1 border-blue-700 border-2 rounded"
             required />
            </div>
          </div>
          <button className="bg-yellow-400 w-full mt-3 rounded-full font-bold hover:cursor-pointer hover:bg-amber-200">
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
