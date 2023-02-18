import { Divide } from 'phosphor-react'
import tradicional from '../../assets/coffee/expresso-tradicional.svg'
import { SelelectedItem } from '../../SelectedItem'

interface SelectedCoffee {
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
    <>
      <div>
        {selected.map((coffee) => {
          return (
            <>
              <SelelectedItem
                name={coffee.name}
                amount={coffee.amount}
                total={coffee.total}
                image={coffee.image}
              />
            </>
          )
        })}
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Total de bens</td>
              <td>R$ 29,70</td>
            </tr>
            <tr>
              <td>Entrega</td>
              <td>R$ 3,50</td>
            </tr>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>R$ 33,20</td>
              </tr>
            </tfoot>
          </tbody>
        </table>
        <button type="submit">CONFIRMAR PEDIDO</button>
      </div>
    </>
  )
}
