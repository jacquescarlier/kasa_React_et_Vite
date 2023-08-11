import Navigation from "../navigation/Navigation";
import logoKasa from "../../pictures/LogoKasa.png";
function Header() {
  return (
    <div className="header">
      <img src={logoKasa} alt="logo kasa" />
      <Navigation />
    </div>
  );
}
export default Header;
