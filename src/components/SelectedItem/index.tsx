import { Trash } from 'phosphor-react'
import { CoffeeAmount } from '../CoffeeAmount'
import { defaultTheme } from '../../styles/Themes/default'
import { useCoffeeUnitsForm } from '../../contexts/formContext'
import {
  ItemDataContainer,
  InputButtonContainer,
  CoffeeTitle,
  Divider,
  ItemContainer,
  ImageDataContainer,
  PriceContainer,
} from './styles'
import { useContext } from 'react'
import { CheckoutContext } from '../../contexts/checkoutContext'
import { FormProvider } from 'react-hook-form'

interface SelectedCoffee {
  id?: number
  image: string
  amount: number
  total: string
  name: string
}

export function SelelectedItem({ image, total, name, amount }: SelectedCoffee) {
  const { removeCoffeeFromCart } = useContext(CheckoutContext)
  const coffeeUnitsForm = useCoffeeUnitsForm()

  return (
    <ItemContainer>
      <ItemDataContainer>
        <ImageDataContainer>
          <div>
            <img src={image} />
          </div>
          <div>
            <CoffeeTitle>{name}</CoffeeTitle>
            <InputButtonContainer>
              <FormProvider {...coffeeUnitsForm}>
                <CoffeeAmount name={name} />
              </FormProvider>
              <button type="button" onClick={() => removeCoffeeFromCart(name)}>
                <Trash color={defaultTheme.purple} />
                REMOVER
              </button>
            </InputButtonContainer>
          </div>
        </ImageDataContainer>
        <PriceContainer>R$ {total}</PriceContainer>
      </ItemDataContainer>
      <Divider />
    </ItemContainer>
  )
}
