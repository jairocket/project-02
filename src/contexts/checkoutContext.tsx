import { createContext, ReactNode, useState } from 'react'
import { moneyFormater } from '../utils'
import { menu } from '../menu-data'

interface SelectedCoffeeData {
  coffeeCart: SelectedCoffee[]
  totalCart: number
  parsedPricedItems: string
  parsedBill: string
  parsedDelivery: string
  addCoffeeToCart: (name: string, cofeeUnits: number) => void
  removeCoffeeFromCart: (name: string) => void
  updateCoffeeUnits: (name: string, cofeeUnits: number) => void
  clearCart: () => void
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
    const updatedCart = coffeeCart.map((item) => {
      if (name === item.name) {
        item.coffeeUnits = coffeeUnits
        item.coffeeTotal = moneyFormater(coffeeUnits * 9.9)
      }
      return item
    })

    setCoffeeCart([...updatedCart])
  }

  const clearCart = () => setCoffeeCart([])

  const totalCart =
    coffeeCart.length > 0
      ? coffeeCart.reduce((total, subtotal) => total + subtotal.coffeeUnits, 0)
      : 0

  const totalPriceItems = totalCart * 9.9

  const delivery = totalPriceItems > 0 ? 3.5 : 0

  const bill = totalPriceItems + delivery

  const parsedPricedItems = moneyFormater(totalPriceItems)
  const parsedDelivery = moneyFormater(delivery)
  const parsedBill = moneyFormater(bill)

  const addCoffeeToCart = (name: string, coffeeUnits: number) => {
    const [selectedCoffee] = menu.filter((item) => name === item.name)
    const coffeeTotal = coffeeUnits * 9.9
    const newCoffee = {
      coffeeUnits,
      coffeeTotal: moneyFormater(+coffeeTotal),
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
        totalCart,
        parsedPricedItems,
        parsedBill,
        parsedDelivery,
        addCoffeeToCart,
        removeCoffeeFromCart,
        updateCoffeeUnits,
        clearCart,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
