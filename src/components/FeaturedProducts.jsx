import {
  Container,
  Title,
  CardsContainer,
  Cards,
  Card,
  CardName,
  ProductData,
  ProductName,
  ProductPrice,
  ProductCategory,
} from "../styles/categories.styles";

import products from "../mocks/featured-products.json";

const FeaturedProducts = () => {
  return (
    <Container>
      <Title>Featured Products</Title>
      <CardsContainer>
        {products.results &&
          products.results.map(product => {
            console.log(product.data);
            return (
              <Cards key={product.data.name}>
                <Card>
                  <img
                    src={product.data.mainimage.url}
                    alt={product.data.mainimage.alt}
                    style={{
                      maxWidth: "100%",
                    }}
                  />
                  <CardName>
                    <ProductData>
                      <ProductName>
                        {product.data.name}
                      </ProductName>
                      <ProductPrice>
                        ${product.data.price}
                      </ProductPrice>
                    </ProductData>
                    <ProductCategory>
                      {product.data.category.slug}
                    </ProductCategory>
                  </CardName>
                </Card>
              </Cards>
            );
          })}
      </CardsContainer>
    </Container>
  );
};

export default FeaturedProducts;
