import starActive from "../../pictures/star-active 1.png"
import starInactive from "../../pictures/star-inactive 1.png"

const Star = ({starRating}) => {
    
    const maxRating = 5;
    const star = [];
    for (let i = 1; i <= maxRating; i++) {
        star.push(
            <img
                key={i}
                src={i <= starRating ? starActive : starInactive}
                alt={i <= starRating ? "Active star" : "Inactive Star "}
            />
        )
    }

    return (
        <div className="star">{star}</div>
    );
};

export default Star;