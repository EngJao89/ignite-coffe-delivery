import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { 
  Container, 
  Content, 
  DetailContent, 
  DetailValuesContent, 
  InformationContent, 
  LeftSide, 
  RightSide 
} from "./styles";

import Delivery from "../../assets/img/delivery.svg";

export function Success () {
  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>

      <Content>
        <RightSide>
          <DetailContent>
            <DetailValuesContent>
              <MapPin weight="fill" size={16} color="purple" />

              <InformationContent>
                <span>
                    Entrega em{" "}
                    <b>
                      Av. GT 1
                    </b>
                  </span>
                  <span>
                    Condomínio Grand Trianon - Anápolis,{" "}
                    Goiás
                  </span>
              </InformationContent>
            </DetailValuesContent>

            <DetailValuesContent>
              <Timer size={16} weight="fill" color="blue" />
              <InformationContent>
                <span>Previsão de entrega</span>
                <b>20 min - 30 min </b>
              </InformationContent>
            </DetailValuesContent>

            <DetailValuesContent>
              <CurrencyDollar size={16} weight="fill" color="yellowDark" />
              <InformationContent>
                <span>Pagamento na entrega</span>
                <b>R$ 25,00</b>
              </InformationContent>
            </DetailValuesContent>
          </DetailContent>
        </RightSide>

        <LeftSide>
          <img 
            src={Delivery} 
            alt=""
          />
        </LeftSide>
      </Content>
    </Container>
  )
}