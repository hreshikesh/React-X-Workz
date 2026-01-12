import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="errorConatiner">
            <div className="errorBox">
                <h1 className="errorHeading">404 - Page Not Found</h1>
                <p className="errorDetail">The page you are looking for does not exist.</p>
                <h3 className="error">{error.data}</h3>
            </div>
        </div>
    )
}

export default ErrorPage;