import PageWrapper from "../layout/PageWrapper";
import "./style.scss";
import starList from "../../mocks/StarsMock";

export default function App() {
  return <PageWrapper stars={starList} />;
}
