import { Minus, Plus } from 'phosphor-react'
import { Button, InputButtonContainer } from './styles'
import { useForm, useFormContext } from 'react-hook-form'
import { useContext } from 'react'
import { CheckoutContext } from '../../contexts/checkoutContext'
import { useCoffeeUnitsForm } from '../../contexts/formContext'

export function CoffeeAmount() {
  const coffeeUnitsForm = useCoffeeUnitsForm()

  const { register, setValue, getValues } = useFormContext()

  const handleIncreaseAmount = () => {
    return getValues('amount') + 1
  }

  const handleDeCreaseAmount = () => {
    if (getValues('amount') > 0) {
      return getValues('amount') - 1
    }
    return 0
  }

  return (
    <InputButtonContainer>
      <Button
        type={'button'}
        onClick={() => setValue('amount', handleDeCreaseAmount())}
      >
        <Minus color="purple" />
      </Button>
      <input
        type="number"
        min={0}
        disabled
        {...register('amount', { valueAsNumber: true })}
      />
      <Button
        type={'button'}
        onClick={() => setValue('amount', handleIncreaseAmount())}
      >
        <Plus color="purple" />
      </Button>
    </InputButtonContainer>
  )
}
