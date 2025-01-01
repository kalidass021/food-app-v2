import { useState, useEffect } from 'react';
import { BASE_URL } from '../utils/constants';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = `${BASE_URL}/api/restaurants`
    try {
      const data = await fetch(`${url}/${resId}`);
      // const data = await fetch(`${url}/${resId}`);
      const json = await data.json();
      setResInfo(json);
    } catch (err) {
      console.error(`Error while fetching the data ${err}`);
      throw err;
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
