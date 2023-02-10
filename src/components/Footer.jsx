import logo from "../../assets/logo_foot.png";

function Header() {
  return (
    <div className="footer">
      <img src={logo} alt="logo" className="footer_logo" />
      <p className="footer_text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Header;
