import { AddressForm } from '../../components/AdressForm'
import { Container, CheckoutSummary } from './styles'
import tradicional from '../../assets/coffee/expresso-tradicional.svg'
import { CheckoutForm } from '../../components/CheckoutForm'

const selectedCoffee = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    amount: 1,
    total: '9,90',
    image: tradicional,
  },
  {
    id: 6,
    name: `Latte`,
    amount: 1,
    total: '9,90',
    image: tradicional,
  },
]

export function Checkout() {
  return (
    <Container>
      <div>
        <h2>Complete seu Pedido</h2>
        <AddressForm />
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <CheckoutSummary>
          <CheckoutForm selected={selectedCoffee} />
        </CheckoutSummary>
      </div>
    </Container>
  )
}
