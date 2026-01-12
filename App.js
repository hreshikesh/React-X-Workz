import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AboutPage from "./src/components/About";
import ErrorPage from "./src/components/Error";
const AppStructure = function () {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}


const appRouter=createBrowserRouter(
    [
        {
            path:"/",
            element:<AppStructure />,
            errorElement:<ErrorPage />
        },
        {
            path:"/about",
            element:<AboutPage />
        }
    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)