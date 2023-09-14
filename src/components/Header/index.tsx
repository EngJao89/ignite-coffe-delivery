import { MapPin, ShoppingCart } from "phosphor-react";

import { HeaderContainer, HeaderContent } from "./styles";
import  coffeeLogo  from "../../assets/coffee-logo.svg";

import { NavLink } from "react-router-dom";
import { Button } from "../Button";

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={ coffeeLogo } alt="" />
      </span>

      <HeaderContent>
        <Button color="purple-light">
          <MapPin size={22} />
          <span>Anápolis, Goiás</span>
        </Button>
        <Button 
          color="yellow-light" 
          className="cart__button"
        >
          <ShoppingCart size={22} />
        </Button>
      </HeaderContent>
    </HeaderContainer>
  )
}