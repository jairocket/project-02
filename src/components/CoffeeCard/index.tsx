import { ShoppingCart } from 'phosphor-react'
import { CoffeeAmount } from '../CoffeeAmount'
import { useNavigate } from 'react-router-dom'

import {
  CoffeeCardContainer,
  CoffeeImageContainer,
  TagsContainer,
  InputContainer,
  FormContainer,
  CheckoutButtonContainer,
} from './styles'
import { FormProvider } from 'react-hook-form'
import { useContext } from 'react'
import { CheckoutContext } from '../../contexts/checkoutContext'
import { useCoffeeUnitsForm } from '../../contexts/formContext'

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
  const { addCoffeeToCart } = useContext(CheckoutContext)
  const navigate = useNavigate()
  const coffeeUnitsForm = useCoffeeUnitsForm()

  const { handleSubmit } = coffeeUnitsForm
  const onSubmit = (data: { amount: number }) => {
    addCoffeeToCart(name, data.amount)
    navigate('/checkout')
  }

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

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <p>
          R$ <span>{`${price}`}</span>
        </p>
        <InputContainer>
          <FormProvider {...coffeeUnitsForm}>
            <CoffeeAmount />
          </FormProvider>

          <CheckoutButtonContainer>
            <ShoppingCart color="white" weight="fill" />{' '}
          </CheckoutButtonContainer>
        </InputContainer>
      </FormContainer>
    </CoffeeCardContainer>
  )
}
