import logo from '../../assets/header/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  HeaderContainer,
  MapPinAndCartContainer,
  MapPinContainer,
  ShoppingCartContainer,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt={'coffee delivery logo'} />
      <MapPinAndCartContainer>
        <MapPinContainer>
          <MapPin />
          <div>Salvador, BA</div>
        </MapPinContainer>
        <ShoppingCartContainer>
          <ShoppingCart />
        </ShoppingCartContainer>
      </MapPinAndCartContainer>
    </HeaderContainer>
  )
}
