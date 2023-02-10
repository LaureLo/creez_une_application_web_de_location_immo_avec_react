import { useState } from "react";
import fleche_gauche from "../assets/fleche_gauche.png";
import fleche_droite from "../assets/fleche_droite.png";
import "../styles/Carrousel.css";

function Carroussel({ slidesImg }) {
  const [actualIndex, setActualIndex] = useState(0);

  const goPrevious = () => {
    const firstSlide = actualIndex === 0;
    const newIndex = firstSlide ? slidesImg.length - 1 : actualIndex - 1;
    setActualIndex(newIndex);
  };
  const goNext = () => {
    const lastSlide = actualIndex === slidesImg.length - 1;
    const newIndex = lastSlide ? 0 : actualIndex + 1;
    setActualIndex(newIndex);
  };

  return (
    <div className="carrousel">
      <div className="carrousel_img">
        <img src={slidesImg[actualIndex]} alt="image_lodging" />
      </div>
      <div>
        <div>
          <img
            src={fleche_gauche}
            alt="fleche gauche"
            className={slidesImg.length <= 1 ? "fleche_none" : "fleche_gauche"}
            onClick={goPrevious}
          />
        </div>
        <div className="carrousel_number">
          {actualIndex + 1}/{slidesImg.length}
        </div>
        <div>
          <img
            src={fleche_droite}
            alt="fleche droite"
            className={slidesImg.length <= 1 ? "fleche_none" : "fleche_droite"}
            onClick={goNext}
          />
        </div>
      </div>
    </div>
  );
}

export default Carroussel;
