import { Information } from "./Components/Information";
import { Card } from "./Components/Card";

import { coffes } from "./utils/json/coffees.json";

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
      <h1>Nossos cafés</h1>

        <CoffeeSection>
          {coffes.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeSection>
      </MainSection>
    </HomeContainer>
  )
}
