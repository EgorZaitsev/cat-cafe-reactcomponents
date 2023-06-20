import asset from "../../assets/pawprint.svg";
import "./ui__styles/Logo.scss";

const Logo = () => (
  <div className="logo">
    <img src={asset} alt="cat logo" />
    <p className="logo__text">Котокафе</p>
  </div>
);

export default Logo;
