import logo from '../../assets/header/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  HeaderContainer,
  MapPinAndCartContainer,
  MapPinContainer,
  ShoppingCartContainer,
} from './styles'
import { defaultTheme } from '../../styles/Themes/default'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt={'coffee delivery logo'} />
      <MapPinAndCartContainer>
        <MapPinContainer>
          <MapPin weight="fill" color={defaultTheme.purple} />
          <div>Salvador, BA</div>
        </MapPinContainer>
        <ShoppingCartContainer>
          <ShoppingCart weight="fill" color={defaultTheme['yellow-dark']} />
        </ShoppingCartContainer>
      </MapPinAndCartContainer>
    </HeaderContainer>
  )
}
