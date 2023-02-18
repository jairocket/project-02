import { AddressForm } from '../../components/AdressForm'
import { SelelectedItem } from '../../components/SelectedItem'
import { Container } from './styles'
import tradicional from '../../assets/coffee/expresso-tradicional.svg'
import { CheckoutForm } from '../../components/AdressForm/CheckoutForm'

const selectedCoffee = [
  {
    name: 'Expresso Tradicional',
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
        <CheckoutForm selected={selectedCoffee} />
      </div>
    </Container>
  )
}
