import "./ui__styles/Title.scss";

const Title = ({ children, size, align }) => (
  <h1
    className={`title ${size ? `title__${size}` : ""} ${
      align ? `title__${align}` : ""
    }`}
  >
    {children}
  </h1>
);

export default Title;
