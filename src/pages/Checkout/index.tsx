import { AddressForm } from '../../components/AdressForm'
import { Container } from './styles'
export function Checkout() {
  return (
    <Container>
      <h2>Complete seu Pedido</h2>
      <AddressForm />
    </Container>
  )
}
