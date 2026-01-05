import RestoCard from "./RestoCard";
import { cardApiData } from "../utility/constants";

const Body = () => {
    return (
        <div>
            <h1 style={{ marginLeft: 180, fontSize: 50 }}>Biryani</h1>
            <p style={{ marginLeft: 180, fontSize: 20, marginBottom: 30 }}>Delicious Biryani restaurants near you
            </p>
            <div className="resto-card">
                {
                    cardApiData.map(data => {
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