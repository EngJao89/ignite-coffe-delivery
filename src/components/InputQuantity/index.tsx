import { Minus, Plus } from "phosphor-react";
import { InputQuantityContainer, QuantityButton, QuantityInput } from "./styles";

export function InputQuantity (){
  return (
    <InputQuantityContainer>
      <QuantityButton type="button">
        <Minus size={14} weight="bold" />
      </QuantityButton>
      <QuantityInput>3</QuantityInput>
      <QuantityButton>
        <Plus size={14} weight="bold" />
      </QuantityButton>
    </InputQuantityContainer>
  )
}