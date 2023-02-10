import { Link } from "react-router-dom";
import "../../styles/Error.css";

function Error() {
  return (
    <div className="error_content">
      <div className="error_404">404</div>
      <div className="error_texte">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link to="/" className="error_link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
