import { useState } from "react";
import { ShoppingCart } from "phosphor-react";

import { Button } from "../../../../components/Button";
import { InputQuantity } from '../../../../components/InputQuantity/index';
import tradicionalExpresso from "../../../../assets/coffee-images/traditional-espresso.svg";

import { useCoffee } from "../../../../hooks/useCoffee";

import { 
  CoffeeBody, 
  CoffeeCardContainer, 
  CoffeeCardHeader, 
  CoffeeDescription, 
  CoffeeFooter, 
  CoffeeLabel, 
  CoffeeLabelContent, 
  CoffeeTitle,
  PriceContainer,
  PurchaseContainer
} from "./styles";


type TCoffee = {
  id: number;
  name: string;
  description: string;
  label: string[];
  price: number;
  image: string;
};

interface ICoffeeCardProps {
  coffee: TCoffee;
}

export function Card({ coffee }: ICoffeeCardProps) {
  const { addNewCoffee } = useCoffee();

  const [quantity, setQuantity] = useState(0);

  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(coffee.price);

  function handleAddCoffee() {
    addNewCoffee({
      coffeeData: {
        ...coffee,
        quantity,
      },
      quantity,
    });
  }

  return(
    <CoffeeCardContainer>
      <CoffeeCardHeader>
        <img src={coffee.image} alt={coffee.name} />
        <CoffeeLabelContent>
          {coffee.label.map((label) => (
            <CoffeeLabel key={label}>{label}</CoffeeLabel>
          ))} 
        </CoffeeLabelContent>
      </CoffeeCardHeader>
      <CoffeeBody>
        <CoffeeTitle>{coffee.name}</CoffeeTitle>
        <CoffeeDescription>{coffee.description}</CoffeeDescription>
      </CoffeeBody>
      <CoffeeFooter>
        <PriceContainer>
          <pre>R$ </pre>
          <span>{priceFormatted}</span>
        </PriceContainer>
        <PurchaseContainer>
          <InputQuantity quantity={quantity} onQuantityChange={setQuantity} />
          <Button
            type="button"
            color="purple-dark"
            className="purchase__button"
            onClick={handleAddCoffee}
          >
            <ShoppingCart size={24} weight="fill" />
          </Button>
        </PurchaseContainer>
      </CoffeeFooter>
    </CoffeeCardContainer>
  )
}