import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  return (
    <div className=" border-2 flex flex-col p-2">
      <img src={data.images[0].image} alt="No image" className="p-10 h-75" />
      <h1 className="py-2 text-3xl line-clamp-1">{data.name}</h1>
      <div className="flex gap-2 py-2 items-center justify-around">
        <div className="-z-10">
          {
            <Rating
              name="half-rating-read"
              defaultValue={data.ratings}
              precision={0.5}
              readOnly
            />
          }
        </div>
        <p className="text-xs">({data.numOfReviews} Reviews)</p>
      </div>
      <p className="font-bold text-4xl">${data.price}</p>
     <Link to={`/product/${data._id}`}> <button  className="bg-yellow-300 rounded-2xl font-bold text-white my-5 hover:cursor-pointer hover:bg-yellow-200 px-2">
        View Details
      </button></Link>
    </div>
  );
};

export default Product;
