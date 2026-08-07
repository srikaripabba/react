import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";


const Body =() => {
   const [listOfRestaurants,setlistOfRestaurants] = useState([
    {
  data: {
    id: "150",
    name: "Spice Villa",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop&auto=format&q=60",
    cuisines: ["Indian", "North Indian"],
    avgRating: 4.7,
    costForTwo: 52000,
    deliveryTime: 28,
  },
},
{
  data: {
    id: "151",
    name: "Pancake Paradise",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&h=300&fit=crop&auto=format&q=60",
    cuisines: ["Breakfast", "Desserts"],
    avgRating: 4.5,
    costForTwo: 30000,
    deliveryTime: 20,
  },
},
{
  data: {
    id: "152",
    name: "Ice Cream Delight",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=300&fit=crop&auto=format&q=60",
    cuisines: ["Desserts", "Ice Cream"],
    avgRating: 4.8,
    costForTwo: 26000,
    deliveryTime: 15,
  },
},
{
  data: {
    id: "153",
    name: "Wrap & Roll",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=500&h=300&fit=crop&auto=format&q=60",
    cuisines: ["Wraps", "Fast Food"],
    avgRating: 4.4,
    costForTwo: 34000,
    deliveryTime: 22,
  },
},


  ]);
   let listOfRestaurants1 = [
   {
  data: {
    id: "150",
    name: "Spice Villa",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop&auto=format&q=60",
    cuisines: ["Indian", "North Indian"],
    avgRating: 4.7,
    costForTwo: 52000,
    deliveryTime: 28,
  },
},
{
  data: {
    id: "151",
    name: "Pancake Paradise",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&h=300&fit=crop&auto=format&q=60",
    cuisines: ["Breakfast", "Desserts"],
    avgRating: 4.5,
    costForTwo: 30000,
    deliveryTime: 20,
  },
},
{
  data: {
    id: "152",
    name: "Ice Cream Delight",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=300&fit=crop&auto=format&q=60",
    cuisines: ["Desserts", "Ice Cream"],
    avgRating: 4.8,
    costForTwo: 26000,
    deliveryTime: 15,
  },
},
{
  data: {
    id: "153",
    name: "Wrap & Roll",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=500&h=300&fit=crop&auto=format&q=60",
    cuisines: ["Wraps", "Fast Food"],
    avgRating: 4.4,
    costForTwo: 34000,
    deliveryTime: 22,
  },
},
]
   return (
      <div className="body">
         <div className="filter">
            <button className="filter-btn" onClick={()=>{ 
              
              
          const filteredList = listOfRestaurants.filter((res)=> res.data.avgRating > 4.5
            );
            setlistOfRestaurants(filteredList);
               

            }}
            
            >Top Rated Restaurants</button>
         </div>
         <div className="res-container">
            {
              listOfRestaurants.map((restaurant)=> <RestaurantCard key={restaurant.data.id}resData={restaurant} />)
            }
            


         </div>
      </div>
   )
}

export default Body;