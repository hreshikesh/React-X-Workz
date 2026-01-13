import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AboutPage from "./src/components/About";
import ErrorPage from "./src/components/Error";

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
            }
            ],
            errorElement: <ErrorPage />
        }
    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)