import About from "../blocks/About";
import StarList from "../blocks/StarList";
import "./layout__styles/MainPage.scss";

const MainPage = ({ stars }) => (
  <main className="main">
    <About />
    <StarList stars={stars} />
  </main>
);

export default MainPage;
