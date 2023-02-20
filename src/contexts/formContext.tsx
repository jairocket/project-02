import { useForm } from 'react-hook-form'

export const useCoffeeUnitsForm = () => {
  return useForm({
    defaultValues: {
      amount: 0,
    },
  })
}
