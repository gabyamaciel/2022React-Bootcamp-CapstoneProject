import {
  Container,
  Title,
  CardsContainer,
  Cards,
  Card,
  CardName,
} from "../styles/categories.styles";

import categories from "../mocks/product-categories.json";

const Categories = () => {
  return (
    <Container>
      <Title>Categories</Title>
      <CardsContainer>
        {categories.results &&
          categories.results.map(category => {
            return (
              <Cards key={category.data.name}>
                <Card>
                  <img
                    src={category.data.main_image.url}
                    alt={category.data.name}
                  />
                  <CardName>
                    <h4>
                      {category.data.name}
                    </h4>
                  </CardName>
                </Card>
              </Cards>
            );
          })}
      </CardsContainer>
    </Container>
  );
};

export default Categories;
