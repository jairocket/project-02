import { createContext, ReactNode, useState } from 'react'
import { menu } from '../menu-data'

interface SelectedCoffeeData {
  coffeeCart: SelectedCoffee[]
  addCoffeeToCart: (name: string, cofeeUnits: number) => void
  removeCoffeeFromCart: (name: string) => void
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

  const addCoffeeToCart = (name: string, coffeeUnits: number) => {
    // const [coffee] = coffeeCart.filter((item) => name === item.name)

    // if (!coffee) {
    const [selectedCoffee] = menu.filter((item) => name === item.name)
    const coffeeTotal = () => coffeeUnits * 9.9
    const newCoffee = {
      coffeeUnits,
      coffeeTotal: `${coffeeTotal()}0`,
      name: selectedCoffee.name,
      image: selectedCoffee.image,
    }

    setCoffeeCart([...coffeeCart, newCoffee])
    console.log(coffeeCart)
    // }

    // coffee.coffeeUnits = coffeeUnits
    // setCoffeeCart([...coffeeCart, coffee])
  }

  const removeCoffeeFromCart = (name: string) => {
    const newCart = coffeeCart.filter((item) => name !== item.name)
    setCoffeeCart(newCart)
  }

  return (
    <CheckoutContext.Provider
      value={{ coffeeCart, addCoffeeToCart, removeCoffeeFromCart }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
