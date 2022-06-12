import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <>
      <Header />
      <Content banners={props.banners} />
      <Footer />
    </>
  );
};

export default Home;