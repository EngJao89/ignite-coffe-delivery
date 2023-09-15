import { Information } from "./Components/Information";

import Coffee from "../../assets/img/coffee.svg"
import { Banner, BannerLeft, BannerRight, HomeContainer } from "./styles";

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
    </HomeContainer>
  )
}
