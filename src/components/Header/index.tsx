import { MapPin, ShoppingCart } from "phosphor-react";

import { HeaderContainer, HeaderContent } from "./styles";
import  coffeeLogo  from "../../assets/img/coffee-logo.svg";

import { Button } from "../Button";

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={ coffeeLogo } alt="" />
      </span>

      <HeaderContent>
        <Button color="purple-light">
          <MapPin size={22} weight="fill" className="header__map-pin_icon" />
          <span>Anápolis, Goiás</span>
        </Button>
        <Button 
          color="yellow-light" 
          className="cart__button"
        >
          <ShoppingCart
            size={22}
            weight="fill"
            className="header__shopping-cart_icon"
          />
          3
        </Button>
      </HeaderContent>
    </HeaderContainer>
  )
}