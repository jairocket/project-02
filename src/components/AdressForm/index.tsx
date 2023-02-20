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
  RadioButton,
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
      pagamento: '',
    },
  })
  const { handleSubmit, register } = addressForm

  const onsubmit = (data: {
    cep: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
    pagamento: string
  }) => console.log(data)

  return (
    <Form onSubmit={handleSubmit(onsubmit)}>
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
          <RadioButton>
            <ButtonInput
              id="pagamento"
              type="radio"
              value={'crédito'}
              {...register('pagamento')}
              required
            />
            <label htmlFor="credito">
              <div>
                <CreditCard color={defaultTheme['purple']} /> CARTÃO DE CRÉDITO
              </div>
            </label>
          </RadioButton>
          <RadioButton>
            <ButtonInput
              id="pagamento"
              type="radio"
              value={'débito'}
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
              value={'dinheiro'}
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
    </Form>
  )
}
