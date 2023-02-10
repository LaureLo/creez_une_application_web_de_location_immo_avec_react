import "../../styles/LodgingInfo.css";
import star_pink from "../../assets/star_pink.png";
import star_grey from "../../assets/star_grey.png";

function LodgingInfo({ description }) {
  const nbrRating = [1, 2, 3, 4, 5];

  return (
    <div className="lodging">
      <div className="lodging_info">
        <div className="lodging_title">{description.title}</div>
        <div className="lodging_location">{description.location}</div>
        <ul className="lodging_tags">
          {description.tags.map((tagsNumber) => (
            <li key={tagsNumber} className="lodging_tag">
              {tagsNumber}
            </li>
          ))}
        </ul>
      </div>
      <div className="lodging_info lodging_info_right">
        <div className="lodging_host">
          <div className="lodging_host_name">{description.host.name}</div>
          <div className="lodging_host_img">
            <img src={description.host.picture} alt={description.host.name} />
          </div>
        </div>
        <div className="lodging_rating">
          {nbrRating.map((ratingElement) =>
            description.rating >= ratingElement ? (
              <img
                src={star_pink}
                alt="etoile rose"
                key={ratingElement}
                className="lodging_star"
              />
            ) : (
              <img
                src={star_grey}
                alt="etoile grise"
                key={ratingElement}
                className="lodging_star"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default LodgingInfo;
