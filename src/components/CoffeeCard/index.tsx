import { ShoppingCart } from 'phosphor-react'
import { CoffeeAmount } from '../CoffeeAmount'
import {
  CoffeeCardContainer,
  CoffeeImageContainer,
  TagsContainer,
  InputContainer,
  FormContainer,
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
  amount,
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
          <CoffeeAmount amount={amount} />
          <CheckoutButtonContainer>
            <ShoppingCart color="white" weight="fill" />{' '}
          </CheckoutButtonContainer>
        </InputContainer>
      </FormContainer>
    </CoffeeCardContainer>
  )
}
