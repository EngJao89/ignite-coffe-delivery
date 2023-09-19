import { MapPinLine } from "phosphor-react";
import { CheckoutCardHeader } from "./Components";
import { 
  CardContainer, 
  CheckoutContainer, 
  RightSection, 
  Title 
} from "./styles";

export function Checkout (){
  return (
    <CheckoutContainer>
      <RightSection>
        <Title>Complete seu pedido</Title>

        <CardContainer>
          <CheckoutCardHeader 
            title="Endereço de entrega"
            subtitle="Informe seu endereço para que possamos entregar seu pedido"
            icon={{
              component: <MapPinLine size={24} />,
              color: "yellow",
            }}
          />
        </CardContainer>
      </RightSection>
    </CheckoutContainer>
  )
}