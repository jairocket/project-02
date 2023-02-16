import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
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
} from './styles'
import { defaultTheme } from '../../styles/Themes/default'

export function AddressForm() {
  const addressForm = useForm({
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })
  const { handleSubmit, watch, register } = addressForm
  return (
    <Form onSubmit={() => console.log('form')}>
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
            {...register('cep')}
          />
          <StreetInput
            type="text"
            id="rua"
            placeholder="Rua"
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
          />
          <CityInput
            type="text"
            id="cidade"
            placeholder="Cidade"
            {...register('cidade')}
          />
          <UfInput type="text" id="uf" placeholder="UF" {...register('uf')} />
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
          <label htmlFor="credito">
            <CreditCard /> CARTÃO DE CRÉDITO
          </label>
          <ButtonInput type="radio" />
          <label htmlFor="credito">
            <Bank /> CARTÃO DE DÉBITO
          </label>
          <ButtonInput type="radio" />
          <label htmlFor="credito">
            <Money /> DINHEIRO
          </label>
          <ButtonInput type="radio" />
        </ButtonGroup>
      </PaymentDiv>
    </Form>
  )
}
