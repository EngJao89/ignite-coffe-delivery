import { MapPin } from "phosphor-react";
import { 
  Container, 
  Content, 
  DetailContent, 
  DetailValuesContent, 
  InformationContent, 
  RightSide 
} from "./styles";

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
                
              </InformationContent>
            </DetailValuesContent>
          </DetailContent>
          
        </RightSide>
      </Content>
    </Container>
  )
}