import { Trash } from 'phosphor-react'
import { CoffeeAmount } from '../CoffeeAmount'

interface SelectedCoffee {
  image: string
  amount?: number
  total: string
  name: string
}

export function SelelectedItem({ image, amount, total, name }: SelectedCoffee) {
  return (
    <div>
      <div>
        <img src={image} />
      </div>
      <div>
        {name}
        <div>
          <CoffeeAmount amount={amount} />
          <button type="button">
            <Trash />
            Remover
          </button>
        </div>
      </div>
      R$ {total}
    </div>
  )
}
