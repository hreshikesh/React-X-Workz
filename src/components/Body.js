import RestoCard from "./RestoCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [restoList, setRestoList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestoList, setFilteredRestoList] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])



    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.97530&lng=77.59100&str=biriyani&trackingId=13b3870b-d900-f4a5-8e7b-b3fbe41df911&submitAction=ENTER&queryUniqueId=a6654eb9-f868-5c4e-43e3-4bbad42cc642");
        const result = await data.json();
        console.log(result.data.cards[1].groupedCard.cardGroupMap.DISH.cards);
        setRestoList(result.data.cards[1].groupedCard.cardGroupMap.DISH.cards);
        setFilteredRestoList(result.data.cards[1].groupedCard.cardGroupMap.DISH.cards);

    }

    if (restoList.length === 0) {
        console.log("inside shimmer");
        return <Shimmer />
    }

    function handleTopRatedClick() {
        const filteredList = restoList.filter((resto) => {
            const rating = resto?.card?.card?.info?.ratings?.aggregatedRating?.rating;
            return rating >= 4.5;
        });

        setFilteredRestoList(filteredList);
    }

    function handleSearchClick() {
        console.log("search clicked");
        const filteredResto =
            restoList.filter((resto) => {
                return resto?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            })
        console.log(filteredResto);
        setFilteredRestoList(filteredResto);

    }
    return (
        <div>

            <div className="headingContainer">
                <h1 style={{ marginLeft: 12, fontSize: 50 }}>Biryani</h1>
                <div className="searchContainer">
                    <input type="text" className="search-input" placeholder="Search for restaurants and food" onChange={(e) => { setSearchText(e.target.value) }} />
                    <button className="search-btn" onClick={handleSearchClick}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => handleTopRatedClick()}>Top Rated Restaurants (above 4.5)</button>
            </div>


            <p style={{ marginLeft: 180, fontSize: 20, marginBottom: 30 }}>Delicious Biryani restaurants near you
            </p>
            <div className="resto-card">
                {
                    filteredRestoList.map((data, index) => {
                        if (index > 0) {
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