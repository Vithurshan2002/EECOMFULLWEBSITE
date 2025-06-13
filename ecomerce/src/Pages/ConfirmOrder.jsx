import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { OrderComplteed } from "../Slices/CartSlice";


const ConfirmOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderInfor = JSON.parse(sessionStorage.getItem("orderinfor"));
  const { user } = useSelector((state) => state.AuthState);
  const { items } = useSelector((state) => state.CartState);
  const { shippingInfor } = useSelector((state) => state.CartState);
  const allitemsprice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = allitemsprice > 200 ? 0 : 25;
  const tax = Number(0.05 * allitemsprice);
  const total = Number(allitemsprice + shipping + tax).toFixed(2);



  const proceedConfirmorder = () => {
    const data = {
      allitemsprice,
      shipping,
      tax,
      total,
    };
    sessionStorage.setItem("orderinfor", JSON.stringify(data));
    // i have to add order so i carea a function in future
   
    dispatch(OrderComplteed()); //to claen storage in  application tab in inspect
    navigate("/orderSuccess");
  };



  return (
    <div className=" md:py-20 py-50   flex flex-col md:flex-row  md:space-x-8">
      <div className="px-10 md:w-3/4">
        <div className="border-2 border-x-0 border-gray-200 my-10 ">
          <h1 className="md:py-3 text-2xl text-green-700 font-extrabold">
            Shipping Infor
          </h1>
          <p className="text-lg py-2">
            <span className="font-bold">Name : </span>
            {user.name}
          </p>
          <p className="text-lg py-2">
            <span className="font-bold">Phone : </span>
            {shippingInfor.phoneNo}
          </p>
          <p className="text-lg py-2">
            <span className="font-bold">Address : </span>
            {shippingInfor.address} {shippingInfor.city} {shippingInfor.state}{" "}
            {shippingInfor.country}
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-semibold">Your Cart Items</h1>
          <div className=" border-2 border-x-0 p-1 border-gray-200">
            {items.map((item, key) => {
              return (
                <div
                  key={key}
                  className="border-1 p-2 flex justify-around items-center gap-2 my-2 "
                >
                  <img src={item.image} alt="no" className="h-20  w-1/5" />

                  <p className="w-2/5">{item.name}</p>
                  <p className="w-2/5 font-bold">
                    {item.quantity} * ${item.price} = $
                    {item.quantity * item.price}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-4 border-green-500 rounded p-5 h-fit mt-5 mx-10">
        <h1 className="text-xl font-extrabold py-1 text-center border-4 border-x-0 border-t-0 border-gray-900">
          Order Summary
        </h1>
        <div className="">
          <div className="flex">
            <p className="font-bold flex-1">Subtotal:</p>
            <p className="font-semibold text-red-600">$ {allitemsprice} </p>
          </div>
          <div className="flex ">
            <p className="font-bold flex-1">Shipping:</p>
            <p className="font-semibold text-red-600">${shipping}</p>
          </div>
          <div className="flex">
            <p className="font-bold flex-1">Tax:</p>
            <p className="font-semibold text-red-600">${tax}</p>
          </div>
          <div className="flex border-4 mt-5 border-green-700 border-x-0">
            <p className="font-bold flex-1">Total:</p>
            <p className=" text-red-600 font-extrabold">$ {total} </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={proceedConfirmorder}
            className="bg-orange-400 p-2 rounded-full text-white font-extrabold mt-5 hover:bg-orange-100 cursor-pointer"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
