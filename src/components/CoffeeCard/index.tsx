import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CoffeeCardContainer,
  CoffeeImageContainer,
  TagsContainer,
  InputContainer,
  FormContainer,
} from './styles'

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
      <CoffeeImageContainer>
        <img src={image} />
      </CoffeeImageContainer>
      <TagsContainer>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>
      <h6>{name}</h6>
      <p>{description}</p>
      <FormContainer>
        <div>{`R$ ${price}`}</div>
        <div>
          <InputContainer>
            <Minus color="purple" />
            <input type="number" />
            <Plus color="purple" />
            <button>
              <ShoppingCart color="white" weight="fill" />{' '}
            </button>
          </InputContainer>
        </div>
      </FormContainer>
    </CoffeeCardContainer>
  )
}
