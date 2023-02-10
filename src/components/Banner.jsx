import "../../styles/Banner.css";

function Banner({ picture, title, alt }) {
  return (
    <div className="banner">
      <img src={picture} alt={alt} className="banner_image" />
      <p className="banner_text">{title}</p>
    </div>
  );
}

export default Banner;
