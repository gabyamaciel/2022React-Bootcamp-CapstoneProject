import {
  Container,
  Title,
  CardsContainer,
  Cards,
  Card,
  CardName,
} from "../styles/categories.styles";

import products from "../mocks/featured-products.json";

const FeaturedProducts = () => {
  return (
    <Container>
      <Title>Featured Products</Title>
      <CardsContainer>
        {products.results &&
          products.results.map(product => {
            console.log(product);
            return null;
          })}
      </CardsContainer>
    </Container>
  );
};

export default FeaturedProducts;
