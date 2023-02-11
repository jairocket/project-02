import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeeImage from '../../assets/coffee-image.svg'
import {
  InfoContainer,
  LandingPageSectionContainer,
  PackageInfoContainer,
  ShoppingCartInfoContainer,
  TimerInfoContainer,
  TitleContainer,
  CoffeeInfoContainer,
  FeaturesContainer,
  TitleAndFeaturesContainer,
  InfoBlockContainer,
} from './styles'

export function LandPageSection() {
  return (
    <LandingPageSectionContainer>
      <TitleAndFeaturesContainer>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
        </TitleContainer>

        <FeaturesContainer>
          <InfoBlockContainer>
            <InfoContainer>
              <ShoppingCartInfoContainer>
                <ShoppingCart color="white" weight="fill" />{' '}
              </ShoppingCartInfoContainer>
              <span>Compra Simples e segura</span>
            </InfoContainer>

            <InfoContainer>
              <TimerInfoContainer>
                <Timer color="white" weight="fill" />{' '}
              </TimerInfoContainer>
              <span>Entrega rápida e rastreada</span>
            </InfoContainer>
          </InfoBlockContainer>

          <InfoBlockContainer>
            <InfoContainer>
              <PackageInfoContainer>
                <Package color="white" weight="fill" />{' '}
              </PackageInfoContainer>
              <span>Embalagem mantem o café intacto</span>
            </InfoContainer>

            <InfoContainer>
              <CoffeeInfoContainer>
                <Coffee color="white" weight="fill" />{' '}
              </CoffeeInfoContainer>
              <span>O café chega fresquinho até você</span>
            </InfoContainer>
          </InfoBlockContainer>
        </FeaturesContainer>
      </TitleAndFeaturesContainer>
      <div>
        <img
          src={CoffeeImage}
          alt={'Copo térmico com o logo do Coffee Delivey'}
        />
      </div>
    </LandingPageSectionContainer>
  )
}
