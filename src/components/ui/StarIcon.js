const StarIcon = ({ feature }) => (
  <>
    {feature !== "empty" ? (
      <figcaption
        className={`starcard__icon ${
          feature === "new" ? `starcard__icon_yellow` : `starcard__icon_green`
        }`}
      >
        {feature.toUpperCase()}
      </figcaption>
    ) : null}
  </>
);

export default StarIcon;
