import Title from "../ui/Title";
import "./blocks__styles/About.scss";
import Illustration from "../../assets/Illustration.svg";
import Place from "../../assets/Place.svg";

const About = () => (
  <>
    <section className="about">
      <div className="about__wrapper">
        <Title size="large">Первое в России котокафе</Title>
        <p className="about__description">
          Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый
          из них ищет новый дом. Животных можно гладить, фотографировать, играть
          с ними.
        </p>
        <div className="about__timestamp">
          <p className="about__worktime">Рабочее время с 8:00 до 23:00</p>
        </div>
        <p className="about__adress">
          <img className="about__adress_logo" alt="adress" src={Place} />
          Санкт-Петербург, набережная реки Карповки, дом 5, литера П
        </p>
      </div>
      <img className="about__image" alt="illustartion" src={Illustration} />
    </section>
  </>
);
export default About;
