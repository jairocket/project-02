import { AddressForm } from '../../components/AdressForm'
import { Container, Title, TitleDiv } from './styles'

export function Checkout() {
  return (
    <Container>
      <TitleDiv>
        <h2>Complete seu Pedido</h2>
        <Title>Cafés selecionados</Title>
      </TitleDiv>
      <div>
        <AddressForm />
      </div>
    </Container>
  )
}
