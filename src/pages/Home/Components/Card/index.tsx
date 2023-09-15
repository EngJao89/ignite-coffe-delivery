import { Button } from "../../../../components/Button";

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

import tradicionalExpresso from "../../../../assets/coffee-images/traditional-espresso.svg";
import { ShoppingCart } from "phosphor-react";

export function Card(){
  return(
    <CoffeeCardContainer>
      <CoffeeCardHeader>
        <img src={tradicionalExpresso} alt="Expresso Tradicional"/>
        <CoffeeLabelContent>
          <CoffeeLabel>Tradicional</CoffeeLabel> 
        </CoffeeLabelContent>
      </CoffeeCardHeader>
      <CoffeeBody>
        <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
        <CoffeeDescription>O tradicional café feito com água quente e grãos moídos.</CoffeeDescription>
      </CoffeeBody>
      <CoffeeFooter>
        <PriceContainer>
            <pre>R$ </pre>
            <span>9,90</span>
          </PriceContainer>
          <PurchaseContainer>
            <Button
              type="button"
              color="purple-dark"
              className="purchase__button"
            >
              <ShoppingCart size={24} weight="fill" />
            </Button>
          </PurchaseContainer>
      </CoffeeFooter>
    </CoffeeCardContainer>
  )
}