import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState("login");


    function handleLogin() {
        isLoggedIn === "login" ? setIsLoggedIn("logout") : setIsLoggedIn("login");
    }
    return (
        <div className="header">
            <div className="logo">
                <img src="https://static.vecteezy.com/system/resources/previews/053/762/082/non_2x/food-delivery-catering-fast-food-logo-icon-free-vector.jpg" alt="Logo" width={70} />
            </div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link>Contact</Link></li>
                    <li><button className="loginButton" onClick={handleLogin} >{isLoggedIn}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;