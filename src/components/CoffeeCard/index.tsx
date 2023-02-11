import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CoffeeCardContainer } from './styles'

export interface CoffeeCardProps {
  image: string
  tags: string[]
  name: string
  description: string
  price: string
  amount?: number
}
export function CoffeeCard({
  image,
  tags,
  name,
  description,
  price,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <div>
        <img src={image} />
      </div>
      {tags.map((tag) => (
        <div key={tag}>{tag}</div>
      ))}
      <div>{name}</div>
      <div>{description}</div>
      <div>
        <div>{`R$ ${price}`}</div>
        <div>
          <div>
            <Minus color="purple" />
            <input type="number" />
            <Plus color="purple" />
          </div>
          <button>
            <ShoppingCart color="white" weight="fill" />{' '}
          </button>
        </div>
      </div>
    </CoffeeCardContainer>
  )
}
