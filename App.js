 

const parent = React.createElement("div",{id: "parent"},
[React.createElement("div",{id: "child"},
        [React.createElement("h1",{},"Iam h1 tag"),
          React.createElement("h2",{},"Iam h2 tag")]  
        
    )],[React.createElement("div",{},[React.createElement("h1",{},"Iam 2"),React.createElement("h1",{},"Iam 2")])]);
















 const heading = React.createElement(
    "h1",{id: "heading"},
    "Hello World From React!"
);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(parent);