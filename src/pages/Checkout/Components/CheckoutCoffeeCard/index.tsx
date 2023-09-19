import { Trash } from "phosphor-react";

import tradicionalExpresso from "../../../../assets/coffee-images/traditional-espresso.svg";
import { Button } from "../../../../components/Button";
import { InputQuantity } from "../../../../components/InputQuantity";

import {
  CheckoutCoffeeContainer,
  CoffeeDetails,
  CoffeeInformations,
  CoffeeTitle,
  CoffeePrice,
  CoffeeActionsContent,
} from "./styles";


export function CheckoutCoffeeCard() {
  return (
    <CheckoutCoffeeContainer>
      <img src={tradicionalExpresso} alt="Tradicional Expresso" height={64} width={64} />

      <CoffeeDetails>
        <CoffeeInformations>
          <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
          <CoffeePrice>R$ 29,70</CoffeePrice>
        </CoffeeInformations>

        <CoffeeActionsContent>
          <InputQuantity />

          <Button
            type="button"
            color="base-button"
          >
            <Trash size={16} />
            REMOVER
          </Button>
        </CoffeeActionsContent>
      </CoffeeDetails>
    </CheckoutCoffeeContainer>
  );
}
