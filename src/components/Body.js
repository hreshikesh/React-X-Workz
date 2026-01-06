import RestoCard from "./RestoCard";
import { cardApiData } from "../utility/constants";
import { useState } from "react";

const Body = () => {
    const [restoList, setRestoList] = useState(cardApiData);

    function handleTopRatedClick() {
     
        const filteredList = restoList.filter(
            (resto) => resto.card.card.info.avgRating >= 4.5 );
        setRestoList(filteredList);

    }

    return (
        <div>
            
            <div className="headingContainer">
                  <h1 style={{ marginLeft: 12, fontSize: 50 }}>Biryani</h1>
                  <button className="filter-btn" onClick={() => handleTopRatedClick()}>Top Rated Restaurants (above 4.5)</button>
            </div>
          
           
            <p style={{ marginLeft: 180, fontSize: 20, marginBottom: 30 }}>Delicious Biryani restaurants near you
            </p>
            <div className="resto-card">
                {
                    restoList.map(data => {
                        return <RestoCard cardData={data}
                            key={data.card.card.info.id}
                        ></RestoCard>
                    })
                }
            </div>
        </div>
    )
}

export default Body;