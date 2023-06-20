import Title from "./Title";
import StarIcon from "./StarIcon";
import "./ui__styles/StarCard.scss";

const StarCard = ({ star }) => (
  <article className="starcard">
    <figure className="starcard__figure">
      <img className="starcard__image" src={star.image} alt="cat" />
      <StarIcon feature={star.feature} />
    </figure>
    <div className="starcard__text">
      <Title size="small" align="left">
        {star.name}
      </Title>
      <p className="starcard__description">{String(star.about)}</p>
    </div>
  </article>
);

export default StarCard;
