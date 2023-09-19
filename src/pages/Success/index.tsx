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
import { Icon } from "../../components/Icon";

export function Success () {
  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>

      <Content>
        <RightSide>
          <DetailContent>
            <DetailValuesContent>
              <Icon color="purple" icon={<MapPin weight="fill" size={16} />} />

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
              <Icon color="yellow" icon={<Timer size={16} weight="fill" />} />
              <InformationContent>
                <span>Previsão de entrega</span>
                <b>20 min - 30 min </b>
              </InformationContent>
            </DetailValuesContent>

            <DetailValuesContent>
              <Icon
                color="yellowDark"
                icon={<CurrencyDollar size={16} weight="fill" />}
              />
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