import Button from "../ui/Button";

const Navigation = (purchase) => (
  <>{purchase ? <Button text="Купить билет" /> : <a href="#">go home</a>}</>
);

export default Navigation;
