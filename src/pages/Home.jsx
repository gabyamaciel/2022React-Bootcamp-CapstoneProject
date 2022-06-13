import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import { Container } from '../styles/content.styles';

const Home = (props) => {
  return (
    <>
      <Header />
      <Container>
        <Slider banners={props.banners} />
        <Categories />
        <FeaturedProducts />
      </Container>
      <Footer />
    </>
  );
};

export default Home;