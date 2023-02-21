import { ShoppingCart } from 'phosphor-react'
import { CoffeeAmount } from '../CoffeeAmount'
import { useNavigate, NavLink } from 'react-router-dom'

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
}

export function CoffeeCard({
  image,
  tags,
  name,
  description,
  price,
}: CoffeeCardProps) {
  const { coffeeCart } = useContext(CheckoutContext)

  const coffeeUnitsForm = useCoffeeUnitsForm()

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
          <FormProvider {...coffeeUnitsForm}>
            <CoffeeAmount name={name} />
          </FormProvider>
          <NavLink to={'/checkout'}>
            <CheckoutButtonContainer type="button" /*onClick={() => onSubmit}*/>
              <ShoppingCart color="white" weight="fill" />{' '}
            </CheckoutButtonContainer>
          </NavLink>
        </InputContainer>
      </FormContainer>
    </CoffeeCardContainer>
  )
}
