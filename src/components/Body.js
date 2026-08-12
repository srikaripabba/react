import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant,setfilteredRestaurant] =  useState([]);
  const [searchText,setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/srikaripabba/data/main/restaurants.json"
    );

    const json = await data.json();

    console.log(json);

    setlistOfRestaurants(json);
    setfilteredRestaurant(json);
  };
  

  return listOfRestaurants.length === 0 ? (
   <Shimmer />  ) : (
    <div className="body">
      <div className="filter">
         <div className="search">
            <input type="text" className="search-box" value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}/>
            <button onClick={()=> {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()));
              setfilteredRestaurant(filteredRestaurant);

            }}>Search</button>
         </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4.5,
            );

            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
