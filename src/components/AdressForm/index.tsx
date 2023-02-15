import { useForm } from 'react-hook-form'
import {
  CityInput,
  ComplementInput,
  DefaultInput,
  Form,
  StreetInput,
  UfInput,
} from './styles'

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
    </Form>
  )
}
