import React from "react";
import ReactDOM from "react-dom/client";


const rootElement = ReactDOM.createRoot(document.getElementById("root"))




function Title() {
    return(
    <div id="titleContainerId">
        <nav>
            <h3>Heading for my webpage</h3>
        </nav>
    </div>
    )
}

const styles= {
    backgroundColor: "red",
    color: "black"
};

const Heading2 = () => (
    <div>
        <Title />
        <div id="container2Id" style={styles}>
            <h1 id="heading2Id">Hello this is heading 2 created using JSX(JavScript XML)</h1>
            <a id="routing2Id" href="https://www.bing.com">Click Here to go to Bing</a>
        </div>
    </div>
);


console.log(Heading2);
console.log(<Title/>)



rootElement.render(<Heading2 />);

