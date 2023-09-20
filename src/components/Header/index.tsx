import { useNavigate } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import  coffeeLogo  from "../../assets/img/coffee-logo.svg";

import { CoffeQuantity, HeaderContainer, HeaderContent } from "./styles";

import { Button } from "../Button";
import { useCoffee } from "../../hooks/useCoffee";
import { useLocation } from "../../hooks/useLocation";

export function Header() {
  const { coffeeQuantity } = useCoffee();

  const { city, uf } = useLocation();

  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    navigate("/checkout");
  };

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <button type="button" onClick={handleGoToHome}>
        <span>
          <img src={ coffeeLogo } alt="" />
        </span>
      </button>


      <HeaderContent>
        <Button color="purple-light">
          <MapPin size={22} weight="fill" className="header__map-pin_icon" />
          <span>
            {city} {uf}
          </span>
        </Button>
        <Button 
          color="yellow-light" 
          className="cart__button"
        >
          <ShoppingCart
            size={22}
            weight="fill"
            className="header__shopping-cart_icon"
            onClick={handleGoToCheckout}
          />
          <CoffeQuantity>
            <span>{coffeeQuantity}</span>
          </CoffeQuantity>
        </Button>
      </HeaderContent>
    </HeaderContainer>
  )
}