import { cloudinaryImageURL } from "../utility/constants";

const RestoCard = ({ cardData }) => {
    const { info } = cardData.card.card
    return (
        <div className="card">
            <img src={cloudinaryImageURL + info.cloudinaryImageId} alt="Resto-images"></img>
            <h3>{info.name}</h3>

            <div className="rating-time">
                <span className="rating">⭐{info.avgRatingString}</span>
                <span className="time">⏱️ {info.sla.slaString}</span>
            </div>

            <p className="flavors">{info.cuisines.join(", ")}</p>
            <p className="location">{info.locality}</p>
        </div>
    )
}

export default RestoCard;