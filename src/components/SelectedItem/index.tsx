import { Trash } from 'phosphor-react'
import { CoffeeAmount } from '../CoffeeAmount'
import { defaultTheme } from '../../styles/Themes/default'
import {
  ItemDataContainer,
  InputButtonContainer,
  CoffeeTitle,
  Divider,
  ItemContainer,
  ImageDataContainer,
  PriceContainer,
} from './styles'

interface SelectedCoffee {
  id?: number
  image: string
  amount?: number
  total: string
  name: string
}

export function SelelectedItem({ image, amount, total, name }: SelectedCoffee) {
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
              <CoffeeAmount amount={amount} />
              <button type="button">
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
