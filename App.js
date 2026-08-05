 import React from "react";
 import ReactDOM from "react-dom/client";
 /**
  * 
  * Header
  * -Logo
  * -Nav Items
  * Body
  * -search
  * ReataurantContainer
  * -RestaurantCard
  * -Img
  * -Name of Res,Star Rating,cuisine,delivery time
  * -
  * Footer
  * Copyright
  * Links
  * Adress
  * Contact
  * 
  */
 
const Header = () => {
   return (
      <div className="header">
         <div className = "logo-container">
         <img  className= "logo" src="https://cdn.dribbble.com/userupload/22636569/file/original-6e345e102a5f8c975b24b3268bf5c22e.jpg?resize=752x&vertical=center"  />
      </div>
      <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
         </ul>
      </div>
      </div>
   )
};
const RestaurantCard = (props) => {
   const {resData} = props;
   const {name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.data;
   return (
      <div className="res-card" style={{
   backgroundColor: "#f0f0f0"
 }}>
   <img  className="res-logo"
    alt="res-log" src={
    resData.data.image}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo/100} For two</h4>
      <h4>{deliveryTime} minutes</h4>
      </div>
   )
}
const resList = [
  
    
  {
    data: {
      id: "102",
      name: "Burger King",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&auto=format&fit=crop&q=60",
      cuisines: ["Burger", "Fast Food"],
      avgRating: 4.3,
      costForTwo: 35000,
      deliveryTime: 25,
    },
  },
  {
    data: {
      id: "103",
      name: "Pasta Palace",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60",
      cuisines: ["Italian", "Pasta"],
      avgRating: 4.6,
      costForTwo: 45000,
      deliveryTime: 28,
    },
  },
  {
    data: {
      id: "104",
      name: "Sushi World",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&auto=format&fit=crop&q=60",
      cuisines: ["Japanese", "Sushi"],
      avgRating: 4.7,
      costForTwo: 70000,
      deliveryTime: 35,
    },
  },
  
  
  {
    data: {
      id: "107",
      name: "Healthy Salad",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60",
      cuisines: ["Healthy", "Salad"],
      avgRating: 4.5,
      costForTwo: 32000,
      deliveryTime: 20,
    },
  },
  {
    data: {
      id: "108",
      name: "Sandwich Stop",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format&fit=crop&q=60",
      cuisines: ["Sandwich", "Snacks"],
      avgRating: 4.3,
      costForTwo: 28000,
      deliveryTime: 19,
    },
  },
  {
    data: {
      id: "109",
      name: "Cake Factory",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.7,
      costForTwo: 40000,
      deliveryTime: 24,
    },
  },
  {
    data: {
      id: "110",
      name: "Taco Fiesta",
      image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500&auto=format&fit=crop&q=60",
      cuisines: ["Mexican", "Tacos"],
      avgRating: 4.4,
      costForTwo: 45000,
      deliveryTime: 27,
    },
  },
  {
    data: {
      id: "111",
      name: "Biryani House",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=60",
      cuisines: ["Biryani", "Indian"],
      avgRating: 4.8,
      costForTwo: 50000,
      deliveryTime: 32,
    },
  },
  {
    data: {
      id: "112",
      name: "Noodle Hub",
      image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=500&auto=format&fit=crop&q=60",
      cuisines: ["Chinese", "Noodles"],
      avgRating: 4.2,
      costForTwo: 36000,
      deliveryTime: 26,
    },
  },
  
  {
    data: {
      id: "114",
      name: "Coffee Cafe",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60",
      cuisines: ["Coffee", "Beverages"],
      avgRating: 4.7,
      costForTwo: 25000,
      deliveryTime: 15,
    },
  },
  
];
const Body =() => {
   return (
      <div className="body">
         <div className="search">
            search
         </div>
         <div className="res-container">
            {
              resList.map((restaurant)=> <RestaurantCard key={restaurant.data.id}resData={restaurant} />)
            }
            


         </div>
      </div>
   )
}


 const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Body/>

         
      </div>
   )
 }
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout />);
