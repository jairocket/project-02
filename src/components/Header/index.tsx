import logo from '../../assets/header/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  HeaderContainer,
  MapPinAndCartContainer,
  MapPinContainer,
  QuantityContainer,
  ShoppingCartContainer,
} from './styles'
import { defaultTheme } from '../../styles/Themes/default'
import { useContext } from 'react'
import { CheckoutContext } from '../../contexts/checkoutContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { totalCart } = useContext(CheckoutContext)
  return (
    <HeaderContainer>
      <img src={logo} alt={'coffee delivery logo'} />
      <MapPinAndCartContainer>
        <MapPinContainer>
          <MapPin weight="fill" color={defaultTheme.purple} />
          <div>Salvador, BA</div>
        </MapPinContainer>
        <NavLink to={'/checkout'}>
          <ShoppingCartContainer>
            <ShoppingCart weight="fill" color={defaultTheme['yellow-dark']} />
          </ShoppingCartContainer>
        </NavLink>
        {totalCart > 0 && <QuantityContainer>{totalCart}</QuantityContainer>}
      </MapPinAndCartContainer>
    </HeaderContainer>
  )
}
