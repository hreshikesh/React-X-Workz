import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AboutPage from "./src/components/About";
import ErrorPage from "./src/components/Error";
import HotelMenu from "./src/components/HotelMenu";
import Register from "./src/components/Register";
import Contact from "./src/components/Contact";

const AppStructure = function () {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}


const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppStructure />,
            children: [{
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/",
                element: <Body />
            },{
                path:"/menu/:id/:name",
                element:<HotelMenu />

            },{
                path:"/register",
                element:<Register />
            },
            {
                path:"/contact",
                element:<Contact title="Contact Page with counter" description="This is the contact page with a list of items." />
            }
            ],
            errorElement: <ErrorPage />
        }
    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)