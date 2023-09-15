import { Information } from "./Components/Information";
import { Card } from "./Components/Card";

import Coffee from "../../assets/img/coffee.svg"
import { 
  Banner, 
  BannerLeft, 
  BannerRight, 
  CoffeeSection, 
  HomeContainer, 
  MainSection 
} from "./styles";

export function Home(){
  return (
    <HomeContainer>
      <Banner>
        <BannerRight>
          <Information />
        </BannerRight>

        <BannerLeft>
          <img src={ Coffee } alt=""/>
        </BannerLeft>
      </Banner>

      <MainSection>
        <CoffeeSection>
          <Card />
        </CoffeeSection>
      </MainSection>
    </HomeContainer>
  )
}
