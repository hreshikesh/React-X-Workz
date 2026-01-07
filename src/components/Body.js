import RestoCard from "./RestoCard";
import { useState,useEffect } from "react";

const Body = () => {
    const [restoList, setRestoList] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async () => {
        const data = await fetch(
           "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.97530&lng=77.59100&str=biriyani&trackingId=13b3870b-d900-f4a5-8e7b-b3fbe41df911&submitAction=ENTER&queryUniqueId=a6654eb9-f868-5c4e-43e3-4bbad42cc642");
        const result = await data.json();
        console.log(result.data.cards[1].groupedCard.cardGroupMap.DISH.cards);
        setRestoList(result.data.cards[1].groupedCard.cardGroupMap.DISH.cards);
        
    }

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
                    restoList.map((data,index) => {
                        if(index>0){
                        return <RestoCard cardData={data}
                            key={data.card.card.info.id}
                        ></RestoCard>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Body;