import {
  NavBar,
  HeaderName,
  Prefix,
  Search,
  Separator,
  CartButton,
  WhiteShoppingBag,
} from "../styles/Header";
 
const Header = () => {
  return (
    <NavBar>
      <HeaderName>
        <Prefix>Wizeline</Prefix> Capstone
      </HeaderName>
      <Separator />
      <Search placeholder="Search" />
      <Separator />
      <CartButton>
        <WhiteShoppingBag size={25} />
      </CartButton>
    </NavBar>
  );
};

export default Header;
