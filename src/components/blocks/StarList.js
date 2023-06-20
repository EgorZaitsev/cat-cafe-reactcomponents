import Title from "../ui/Title";
import StarCard from "../ui/StarCard";
import "./blocks__styles/StarList.scss";
import Button from "../ui/Button";

const StarList = ({ stars }) => (
  <section className="starlist">
    {stars?.length ? (
      <>
        <Title size="large" align="center">
          Наши звезды
        </Title>

        <ul className="starlist__list">
          {stars.map((star) => (
            <li className="starlist__item">
              <StarCard star={star} />
            </li>
          ))}
        </ul>
        <Button text="Купить билет" />
      </>
    ) : null}
  </section>
);

export default StarList;
