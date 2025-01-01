import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';
// import resList from "../utils/mockData";
import RestaurantCardLoader from '../components/skeleton/RestaurantCardLoader';
import {
  BASE_URL,
  DEFAULT_LATITUDE,
  DEFAULT_LONGITUDE,
} from '../utils/constants';

import useGeoLocation from '../hooks/useGeoLocation';

const Home = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [showTopRated, setShowTopRated] = useState(false);

  const { latitude, longitude } = useGeoLocation();

  const lat = latitude || DEFAULT_LATITUDE;
  const lng = longitude || DEFAULT_LONGITUDE;

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, [lat, lng]);

  const fetchData = async () => {
    const url = `${BASE_URL}/api/restaurants?lat=${lat}&lng=${lng}`;
    // const url =
    //   'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
    try {
      const data = await fetch(url);
      const json = await data.json();

      // console.log('json data', json);
      // optional chaining
      setRestaurantList(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error(`Error while fetching the data ${err}`);
      throw err;
    }
  };

  const filterBtnClick = () => {
    // remove top rated filter
    const filteredList = restaurantList.filter((res) => res.info.avgRating > 4);

    // showTopRated === false
    if (!showTopRated) {
      setFilteredRestaurant(filteredList);
      setShowTopRated(true);
    } else {
      setFilteredRestaurant(restaurantList);
      setShowTopRated(false);
    }
    // setShowTopRated(!showTopRated);
    // const filteredList = !showTopRated
    //   ? restaurantList.filter((res) => res.info.avgRating > 4.5)
    //   : restaurantList;
    // // setRestaurantList(filteredList);
    // setFilteredRestaurant(filteredList);
    // console.log("filteredList", filteredList);
  };

  // conditional rendering
  // if (restaurantList.length === 0)
  return !restaurantList?.length ? (
    <RestaurantCardLoader />
  ) : (
    <div className='bg-rgb(255, 255, 255)'>
      <div className='flex items-center ml-[300px]'>
        <div className='m-4 p-4'>
          <input
            data-testid='searchInput'
            type='text'
            placeholder='Search'
            className='border-[1.5px] pl-2 rounded-xl w-[350px] h-[30px] border-solid border-gray-400'
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className='p-4 py-1 m-4 bg-[#ff5200] text-white rounded-xl'
            onClick={() => {
              // Filter the res and update the UI
              // search text
              // console.log('searchText', searchText);
              const filteredRestaurant = restaurantList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className='form-control pl-[120px] mr-0'>
          <label className='label cursor-pointer'>
            <span className='label-text mr-[10px]'>Top Rated</span>
            <input
              type='checkbox'
              className='toggle bg-gray-600 toggle-error'
              onClick={filterBtnClick}
            />
          </label>
        </div>
        {/* <div className='m-4 p-4 flex items-center'>
          <button
            className='px-4 py-2 bg-blue-100 rounded-lg'
            onClick={filterBtnClick}
          >
            Top Rated Restaurants
          </button>
        </div> */}
        <div className='m-4 p-4 flex items-center'>
          {/* Using that function update data in the context */}
          {/* <label>Username </label> */}
          {/* <input
            className='border border-black p-2'
            value={loggedInuser}
            onChange={(event) => setUserName(event.target.value)}
          /> */}
        </div>
      </div>
      <div className='ml-[20px] p-[40px] grid grid-cols-4 gap-[10px] pt[10px]'>
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`restaurants/${restaurant.info.id}`}
          >
            {/* if a delivery time is less than 30mins add speedy label*/}
            {/* {console.log(
              'restaurant.info.sla.deliveryTime',
              restaurant?.info?.sla?.deliveryTime <= 30
            )} */}

            {/* {restaurant.info.sla.deliveryTime <= 30 ? (
              <RestaurantCardSpeedy resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )} */}

            <RestaurantCard resData={restaurant} />

            {/* {
            restaurant.info.sla.deliveryTime < 26 ? <RestaurantCardSpeedy resData={restaurant} /> : <RestaurantCard resData={restaurant} />
          } */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
