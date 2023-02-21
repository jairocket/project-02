import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  CityInput,
  ComplementInput,
  DefaultInput,
  Form,
  StreetInput,
  UfInput,
  AddressFormTitle,
  ButtonInput,
  FormDiv,
  InputDiv,
  PaymentDiv,
  ButtonGroup,
  RadioButton,
  CheckoutSummary,
} from './styles'
import { defaultTheme } from '../../styles/Themes/default'
import { useAddress } from '../../contexts/address'
import { CheckoutForm } from '../CheckoutForm'
import { useContext } from 'react'
import { CheckoutContext } from '../../contexts/checkoutContext'
import { useNavigate } from 'react-router-dom'
import { AddressContext } from '../../contexts/addressContext'

export function AddressForm() {
  const { handleSubmit, register } = useAddress()
  const { clearCart } = useContext(CheckoutContext)
  const { setNewAddress } = useContext(AddressContext)
  const navigate = useNavigate()

  const onsubmit = (data: {
    cep: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
    pagamento: string
  }) => {
    clearCart()
    navigate('/confirmation')
    console.log(data)
    setNewAddress(data)
  }

  return (
    <Form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <FormDiv>
          <AddressFormTitle>
            <MapPinLine weight="bold" color={defaultTheme['yellow-dark']} />
            <div>
              <h6>Endereço de Entrega</h6>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressFormTitle>
          <InputDiv>
            <DefaultInput
              type="text"
              id="cep"
              placeholder="CEP"
              maxLength={8}
              required
              {...register('cep')}
            />
            <StreetInput
              type="text"
              id="rua"
              placeholder="Rua"
              required
              {...register('rua')}
            />
            <DefaultInput
              type="text"
              id="numero"
              placeholder="Número"
              {...register('numero')}
            />
            <ComplementInput
              type="text"
              id="complemento"
              placeholder="Complemento"
              {...register('complemento')}
            />

            <DefaultInput
              type="text"
              id="bairro"
              placeholder="Bairro"
              {...register('bairro')}
              required
            />
            <CityInput
              type="text"
              id="cidade"
              placeholder="Cidade"
              {...register('cidade')}
              required
            />
            <UfInput
              type="text"
              id="uf"
              placeholder="UF"
              maxLength={2}
              {...register('uf')}
            />
          </InputDiv>
        </FormDiv>

        <PaymentDiv>
          <AddressFormTitle>
            <CurrencyDollar weight="bold" color={defaultTheme['purple']} />
            <div>
              <h6>Pagamento</h6>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </AddressFormTitle>
          <ButtonGroup>
            <RadioButton>
              <ButtonInput
                id="pagamento"
                type="radio"
                value={'Crédito'}
                {...register('pagamento')}
                required
              />
              <label htmlFor="credito">
                <div>
                  <CreditCard color={defaultTheme['purple']} /> CARTÃO DE
                  CRÉDITO
                </div>
              </label>
            </RadioButton>
            <RadioButton>
              <ButtonInput
                id="pagamento"
                type="radio"
                value={'Débito'}
                {...register('pagamento')}
                required
              />

              <label htmlFor="debito">
                <div>
                  <Bank color={defaultTheme['purple']} /> CARTÃO DE DÉBITO
                </div>
              </label>
            </RadioButton>

            <RadioButton>
              <ButtonInput
                id="pagamento"
                type="radio"
                value={'Dinheiro'}
                {...register('pagamento')}
                required
              />
              <label htmlFor="dinheiro">
                <div>
                  <Money color={defaultTheme['purple']} /> DINHEIRO
                </div>
              </label>
            </RadioButton>
          </ButtonGroup>
        </PaymentDiv>
      </div>
      <CheckoutSummary>
        <CheckoutForm />
      </CheckoutSummary>
    </Form>
  )
}
