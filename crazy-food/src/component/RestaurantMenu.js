import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantDetails from "../utiles/useRestaurantDetails";
import { FOOD_ITEM_IMG_URL } from "../utiles/constants";

const RestaurantMenu = () => {
  const {resId} = useParams()
const {restaurant} = useRestaurantDetails(resId)
  // Check if restaurant is not defined or its cards array is empty
 

  return (
    <div className="flex flex-col overflow-hidden m-3 p-3 w-60  rounded-lg hover:shadow-xl duration-300 font-poppins bg-white shadow-sm">
    <h4>{restaurant?.name}</h4>
    <img   className="w-44 " src={FOOD_ITEM_IMG_URL + restaurant?.cloudinaryImageId} alt="Restaurant" />
    <h2>{restaurant.areaName}</h2>
    <h2>{restaurant.city}</h2>

    <div className="restaurant-menu">
     
    </div>
  </div>
  );
};

export default RestaurantMenu;
