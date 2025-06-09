import axios from "axios";
import { addcartitemRequest, addcartitemsSuccess } from "../Slices/CartSlice";

export const addCartItem = (id, qty) => async (dispatch) => {
  try {
    dispatch(addcartitemRequest());
    const { data } = await axios.get(
      `http://localhost:3000/api/singleproduct/${id}`
    );
    dispatch(
      addcartitemsSuccess({
        product: data.message._id,
        name: data.message.name,
        price: data.message.price,
        image: data.message.images[0].image,
        stock: data.message.stock,
        quantity: qty,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
