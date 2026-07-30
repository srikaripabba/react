 import React from "react";
 import ReactDOM from "react-dom/client";


 const Title = () => {
    return (<h1 id ="head">Namsthe react hello</h1>)

 }

 const HeadingComponent = () => (
    <div className = "container">
        <Title />
 <h1 className="heading">
    Hi how are you</h1>
    </div>

 );

 
    
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<HeadingComponent />);
