import { createContext, ReactNode, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { menu } from '../menu-data'
import { useCoffeeUnitsForm } from './formContext'

interface SelectedCoffeeData {
  coffeeCart: SelectedCoffee[]
  addCoffeeToCart: (name: string, cofeeUnits: number) => void
  removeCoffeeFromCart: (name: string) => void
  updateCoffeeUnits: (name: string, cofeeUnits: number) => void
}

interface SelectedCoffee {
  coffeeUnits: number
  coffeeTotal: string
  name: string
  image: string
}

interface CheckoutContextProviderProps {
  children: ReactNode
}

export const CheckoutContext = createContext({} as SelectedCoffeeData)

export const CheckoutContextProvider = ({
  children,
}: CheckoutContextProviderProps) => {
  const [coffeeCart, setCoffeeCart] = useState([] as SelectedCoffee[])

  const updateCoffeeUnits = (name: string, coffeeUnits: number) => {
    const [coffee] = coffeeCart.filter((item) => name === item.name)
    const otherCoffee = coffeeCart.filter((item) => name !== item.name)
    if (coffee) {
      coffee.coffeeUnits = coffeeUnits
      coffee.coffeeTotal = `${coffeeUnits * 9.9}0`

      setCoffeeCart([...otherCoffee, coffee])
    }
  }

  const addCoffeeToCart = (name: string, coffeeUnits: number) => {
    const [selectedCoffee] = menu.filter((item) => name === item.name)
    const coffeeTotal = () => coffeeUnits * 9.9
    const newCoffee = {
      coffeeUnits,
      coffeeTotal: `${coffeeTotal()}0`,
      name: selectedCoffee.name,
      image: selectedCoffee.image,
    }
    setCoffeeCart([...coffeeCart, newCoffee])
  }

  const removeCoffeeFromCart = (name: string) => {
    const newCart = coffeeCart.filter((item) => name !== item.name)
    setCoffeeCart(newCart)
  }

  return (
    <CheckoutContext.Provider
      value={{
        coffeeCart,
        addCoffeeToCart,
        removeCoffeeFromCart,
        updateCoffeeUnits,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
