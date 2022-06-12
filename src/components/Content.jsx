import { Container } from '../styles/content.styles';
import Slider from './Slider';

const Content = (props) => {
  return (
    <Container>
      <Slider banners={props.banners} />
    </Container>
  );
};

export default Content;