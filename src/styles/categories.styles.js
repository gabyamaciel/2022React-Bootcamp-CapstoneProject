import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-bottom: 1px solid #CBB59B;
`;

export const Title = styled.h3`
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.25rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  flex-direction: row;
`;

export const Cards = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  box-sizing: border-box;
  @media (max-width: 1400px) {
    width: 32%;
  }
  @media (max-width: 1200px) {
    width: 49%;
  }
  @media (max-width: 600px) {
    width: 99%;
  }
`;

export const Card = styled.div`
  border-radius: 12px;
  margin: 20px;
  z-index: 0;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  background-color: #F1F1F1;
  cursor: pointer;
`;

export const CardName = styled.div`
  padding: 18px;
`;

export const ProductData = styled.div`
  display: flex;
  align-items: center;
  margin-top: -1.5rem;
  margin-bottom: -1.5rem;
  @media (min-width: 600px) and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProductName = styled.h4`
  width: 80%;
  @media (min-width: 600px) and (max-width: 1200px) {
    width: 100%;
    margin-bottom: -1rem;
    font-size: 14px;
  }
`;

export const ProductPrice = styled.h5`
  width: 20%;
  @media (min-width: 600px) and (max-width: 1200px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const ProductCategory = styled.h5`
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: .5rem;
`;