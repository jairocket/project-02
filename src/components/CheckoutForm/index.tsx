import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CheckoutContext } from '../../contexts/checkoutContext'
import { SelelectedItem } from '../SelectedItem'
import { SubmitButton, Table, CheckoutContainer } from './styles'

export function CheckoutForm() {
  const { coffeeCart, parsedPricedItems, parsedBill, parsedDelivery } =
    useContext(CheckoutContext)

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
                <span>{`${parsedPricedItems}`}</span>{' '}
              </td>
            </tr>
            <tr>
              <td>Entrega</td>
              <td>
                <span>{`${parsedDelivery}`}</span>{' '}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{`${parsedBill}`}</td>
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
