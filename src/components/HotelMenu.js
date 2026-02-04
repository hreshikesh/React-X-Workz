import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utility/constants";
import { useParams } from "react-router-dom";
const HotelMenu = () => {

    const [menuData, setMenuData] = useState(null);

    const { id } = useParams();
    const { name } = useParams();

    useEffect(() => {
        fetchMenuData();
    }, [])

    const fetchMenuData = async () => {
        const data = await fetch(MENU_API_URL);
        console.log("menu data fetch called");
        const result = await data.json();
        console.log("Menu data", result);
        setMenuData(result);
    }

    return (
       <div className="menu-container">
    <div className="menu-header">
        Hotel Menu Component
    </div>

    <div className="restaurant-id">
        Restaurant id is : {id}
    </div>

    <div className="restaurant-name">
        Restaurant name is : {name}
        
    </div>

    <div className="menu-grid">
        {menuData && menuData.recipes.map((item) => (
            <div className="menu-card" key={item.id}>
                <img src={item.image} alt={item.name} className="menu-image" />

                <h3 className="menu-title">{item.name}</h3>

                <p className="menu-cuisine">{item.cuisine}</p>

                <p className="menu-time">
                    ⏱ {item.prepTimeMinutes} mins
                </p>

                <p className="menu-instructions">
                    {item.instructions}
                </p>
            </div>
        ))}
    </div>
</div>


    )
}
export default HotelMenu;