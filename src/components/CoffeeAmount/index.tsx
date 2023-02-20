import { Minus, Plus } from 'phosphor-react'
import { Button, InputButtonContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { CheckoutContext } from '../../contexts/checkoutContext'

interface CoffeeAmountProps {
  name: string
}

export function CoffeeAmount({ name }: CoffeeAmountProps) {
  const {
    addCoffeeToCart,
    removeCoffeeFromCart,
    coffeeCart,
    updateCoffeeUnits,
  } = useContext(CheckoutContext)

  const coffee = coffeeCart.find((coffee) => coffee.name === name)
  const units = coffee?.coffeeUnits

  const { register, setValue, getValues } = useFormContext()

  useEffect(() => {
    if (units) {
      setValue(`amount`, coffee.coffeeUnits)
    }
  }, [units])

  const handleIncreaseAmount = () => {
    const newValue = getValues('amount') + 1
    const coffee = coffeeCart.find((coffee) => coffee.name === name)
    if (coffee) {
      updateCoffeeUnits(name, newValue)
    } else {
      addCoffeeToCart(name, newValue)
    }
  }

  const handleDeCreaseAmount = () => {
    const newValue = getValues('amount') - 1

    if (newValue > 0) {
      updateCoffeeUnits(name, newValue)
      return
    }
    removeCoffeeFromCart(name)
  }

  return (
    <InputButtonContainer>
      <Button type={'button'} onClick={() => handleDeCreaseAmount()}>
        <Minus color="purple" />
      </Button>
      <input
        type="number"
        min={0}
        disabled
        {...register('amount', {
          valueAsNumber: true,
        })}
      />
      <Button type={'button'} onClick={() => handleIncreaseAmount()}>
        <Plus color="purple" />
      </Button>
    </InputButtonContainer>
  )
}
