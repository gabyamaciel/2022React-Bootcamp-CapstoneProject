import styled from 'styled-components';
import { ShoppingBag } from "@styled-icons/fluentui-system-regular/ShoppingBag";

export const NavBar = styled.div`
  background-color: #CBB59B;
  position: fixed;
  z-index: 8000;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  height: 3rem;
  align-items: center;
  border-bottom: 1px solid #EADBC9;
`;

export const HeaderName = styled.div`
  color: white;
  font-size: 0.875rem;
  padding: 0 2rem 0 2rem;
  border: 0.125rem solid transparent;
  font-weight: 600;
  letter-spacing: 0.1px;
  line-height: 1.25rem;
  outline: none;
  text-decoration: none;
  transition: border-color 110ms;
  user-select: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #EADBC9;
  }
`;

export const CartButton = styled.button`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  border: 0.125rem solid transparent;
  border: none;
  background-color: #CBB59B;
  padding: 10px;
  &:hover {
    background-color: #EADBC9;
  }
`;

export const WhiteShoppingBag = styled(ShoppingBag)`
  color: white;
`;

export const Prefix = styled.p`
  font-weight: 400;
`;

export const Search = styled.input`
  display: flex;
  align-items: center;
  margin: 0 1rem 0 auto;
`;

export const Separator = styled.div`
  width: 1px;
  background-color: #EADBC9;
  height: 50%;
  align-items: center;
`;