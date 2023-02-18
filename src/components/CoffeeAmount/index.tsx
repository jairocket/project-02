import { Minus, Plus } from 'phosphor-react'
import { InputButtonContainer } from './styles'

interface CoffeeAmountInterface {
  amount?: number
}

export function CoffeeAmount({ amount }: CoffeeAmountInterface) {
  return (
    <InputButtonContainer>
      <Minus color="purple" />
      <input type="number" disabled value={amount} />
      <Plus color="purple" />
    </InputButtonContainer>
  )
}
