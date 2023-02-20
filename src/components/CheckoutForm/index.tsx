import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CheckoutContext } from '../../contexts/checkoutContext'
import { SelelectedItem } from '../SelectedItem'
import { SubmitButton, Table, CheckoutContainer } from './styles'

export function CheckoutForm() {
  const { coffeeCart } = useContext(CheckoutContext)

  console.log(coffeeCart)
  return (
    <CheckoutContainer>
      <div>
        {coffeeCart.map((coffee) => {
          return (
            <div key={coffee.name}>
              <SelelectedItem
                name={coffee.name}
                amount={coffee.coffeeUnits}
                total={coffee.coffeeTotal}
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
        <NavLink to={'/confirmation'}>
          <SubmitButton type="button">CONFIRMAR PEDIDO</SubmitButton>
        </NavLink>
      </div>
    </CheckoutContainer>
  )
}
