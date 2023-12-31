import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import { Icon } from "../../components/Icon";
import Delivery from "../../assets/img/delivery.svg";
import { useCoffee } from "../../hooks/useCoffee";

import { 
  Container, 
  Content, 
  DetailContent, 
  DetailValuesContent, 
  InformationContent, 
  LeftSide, 
  RightSide 
} from "./styles";

export function Success () {
  const navigate = useNavigate();

  const { checkoutData } = useCoffee();

  useEffect(() => {
    if (!checkoutData) {
      navigate("/");
    }
  });

  if (!checkoutData) {
    return <></>;
  }

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
                      {checkoutData.address.rua}, {checkoutData.address.numero}
                    </b>
                  </span>
                  <span>
                    {checkoutData.address.bairro} - {checkoutData.address.cidade},{" "}
                    {checkoutData.address.uf}
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
                <b>{checkoutData.paymentMethod}</b>
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