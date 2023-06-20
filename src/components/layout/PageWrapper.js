import Header from "./Header";
import MainPage from "./MainPage";
import Footer from "./Footer";

const PageWrapper = ({ ...prop }) => (
  <>
    <Header />
    <MainPage {...prop} />
    <Footer />
  </>
);

export default PageWrapper;
