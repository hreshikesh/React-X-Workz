import React from "react";
import ReactDOM from "react-dom/client";


const rootElement=ReactDOM.createRoot(document.getElementById("root"))

const heading=React.createElement("div",{id:"container1Id"},
    React.createElement("h1",{id:"heading1Id"},"Hello this is a react heading element"),
    React.createElement("a",{id:"routingId",href:"https://www.google.com"},"Click Here to to go to google"),
    React.createElement("button",{id:"btnId"},"Click Me"),
    React.createElement("img",{id:"imageId",src:"https://picsum.photos/600/400"}),
    React.createElement("div",{id:"paragraphContainerId"},
        React.createElement("p",{id:"paragraphId"},"THis is paragraph in a div")
    )

)

console.log(heading);


rootElement.render(heading);

