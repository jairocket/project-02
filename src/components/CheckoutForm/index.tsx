import { SelelectedItem } from '../SelectedItem'
import { SubmitButton, Table, CheckoutContainer } from './styles'

interface SelectedCoffee {
  id: number
  image: string
  amount?: number
  total: string
  name: string
}

interface SelectedCoffeeList {
  selected: SelectedCoffee[]
}
export function CheckoutForm({ selected }: SelectedCoffeeList) {
  return (
    <CheckoutContainer>
      <div>
        {selected.map((coffee) => {
          return (
            <div key={coffee.id}>
              <SelelectedItem
                name={coffee.name}
                amount={coffee.amount}
                total={coffee.total}
                image={coffee.image}
              />
            </div>
          )
        })}
      </div>
      <div>
        <Table>
          <tbody>
            <tr>
              <td>Total de bens</td>
              <td>
                <span>R$ 29,70</span>{' '}
              </td>
            </tr>
            <tr>
              <td>Entrega</td>
              <td>
                <span>R$ 3,50</span>{' '}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>R$ 33,20</td>
            </tr>
          </tfoot>
        </Table>
        <SubmitButton type="submit">CONFIRMAR PEDIDO</SubmitButton>
      </div>
    </CheckoutContainer>
  )
}
