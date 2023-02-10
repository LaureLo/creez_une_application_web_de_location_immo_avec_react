import { useState } from "react";
import vector_close from "../assets/vector_close.png";
import vector_open from "../assets/vector_open.png";
import "../styles/Collapse.css";

function Collapse({ title, texte }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTxt, setIsOpenTxt] = useState(false);

  return isOpen ? (
    <div className="collapse">
      <div className="collapse_head" onClick={() => setIsOpen(false)}>
        <span className="collapse_title">{title}</span>
        <img
          src={vector_open}
          alt="flèche collapse"
          className="collapse_img"
        ></img>
      </div>
      {isOpenTxt ? (
        <p className="collapse_texte" onClick={() => setIsOpenTxt(false)}>
          {texte}
        </p>
      ) : (
        <p className="collapse_texte" onClick={() => setIsOpenTxt(true)}>
          {texte}
        </p>
      )}
    </div>
  ) : (
    <div className="collapse">
      <div className="collapse_head" onClick={() => setIsOpen(true)}>
        <span className="collapse_title">{title}</span>
        <img
          src={vector_close}
          alt="flèche collapse"
          className="collapse_img"
        ></img>
      </div>
    </div>
  );
}
export default Collapse;
