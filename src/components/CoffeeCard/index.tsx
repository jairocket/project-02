import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CoffeeCardContainer,
  CoffeeImageContainer,
  TagsContainer,
  InputContainer,
  FormContainer,
  InputButtonContainer,
  CheckoutButtonContainer,
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
        <p>
          R$ <span>{`${price}`}</span>
        </p>
        <InputContainer>
          <InputButtonContainer>
            <Minus color="purple" />
            <input type="number" disabled value={1} />
            <Plus color="purple" />
          </InputButtonContainer>
          <CheckoutButtonContainer>
            <ShoppingCart color="white" weight="fill" />{' '}
          </CheckoutButtonContainer>
        </InputContainer>
      </FormContainer>
    </CoffeeCardContainer>
  )
}
