import Logo from "../ui/Logo";
import Navigation from "../blocks/Navigation";
import "./layout__styles/Header.scss";

const Header = () => (
  <header className="header">
    <Logo />
    <Navigation purchase />
  </header>
);

export default Header;
