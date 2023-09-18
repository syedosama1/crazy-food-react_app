import { useState, useEffect } from "react";
import { MENU_URL } from "../utiles/constants";

const useRestaurantDetails = (resId) => {
  const [restaurant, setRestaurant] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log({rest:restaurant});
  // Fetch restaurant data from the API
    async function getRestaurantInfo() {
      try {
        const response = await fetch(MENU_URL + resId);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const json = await response.json();
        const restaurantData = json.data.cards[0];

        // Assuming restaurantData.card.card.info contains the info data
        const infoData = restaurantData.card.card.info;
        setRestaurant(infoData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    useEffect(() => {

    getRestaurantInfo();
  }, [resId]);

  // Return an object with restaurant data, loading state, and error
  return { restaurant, loading, error };
};

export default useRestaurantDetails;
