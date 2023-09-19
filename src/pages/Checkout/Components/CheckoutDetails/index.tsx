import { Button } from "../../../../components/Button";

import { CheckoutCoffeeCard } from "../CheckoutCoffeeCard";

import {
  CheckoutTotalPriceContent,
  CheckoutValuePrice,
  CheckoutValuesContent,
  CheckoutValueTitle,
  CheckoutValueTotalPrice,
  CheckoutValueTotalTitle,
} from "./styles";

export function CheckoutDetails() {

  return (
    <>
      <CheckoutCoffeeCard />

      <CheckoutTotalPriceContent>
        <CheckoutValuesContent>
          <CheckoutValueTitle>Total de itens</CheckoutValueTitle>
          <CheckoutValuePrice>3</CheckoutValuePrice>
        </CheckoutValuesContent>

        <CheckoutValuesContent>
          <CheckoutValueTitle>Entrega</CheckoutValueTitle>
          <CheckoutValuePrice>R$ 3,50</CheckoutValuePrice>
        </CheckoutValuesContent>

        <CheckoutValuesContent>
          <CheckoutValueTotalTitle>Total</CheckoutValueTotalTitle>
          <CheckoutValueTotalPrice>R$ 33,20</CheckoutValueTotalPrice>
        </CheckoutValuesContent>

        <Button type="submit" color="yellow">
          CONFIRMAR PEDIDO
        </Button>
      </CheckoutTotalPriceContent>
    </>
  );
}
