import { useForm } from 'react-hook-form'

export const useAddress = () =>
  useForm({
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
