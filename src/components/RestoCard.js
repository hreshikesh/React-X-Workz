import { cloudinaryImageURL } from "../utility/constants";

const RestoCard = ({ cardData }) => {
    const info = cardData?.card?.card?.info;

   

    return (
        <div className="card">
            {info.imageId && (
                <img
                    src={cloudinaryImageURL + info.imageId}
                    alt={info.name}
                />
            )}

            <h3>{info.name}</h3>

            <p className="category">{info.category}</p>

            <p className="price">
                ₹{(info.price || info.defaultPrice) / 100}
            </p>

            {info.ratings?.aggregatedRating?.rating && (
                <p className="rating">
                    ⭐ {info.ratings.aggregatedRating.rating}
                </p>
            )}
        </div>
    );
};

export default RestoCard;
