import "../../styles/Card.css";

function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card_img" />
      <div className="card_title_content">
        <h1 className="card_title">{title}</h1>
      </div>
    </div>
  );
}

export default Card;
