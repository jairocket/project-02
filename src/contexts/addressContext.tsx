import { createContext, ReactNode, useState } from 'react'

interface AdressInterface {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  pagamento: string
}

interface AddressData {
  address: AdressInterface
  setNewAddress: (address: AdressInterface) => void
}

interface AddressContextProviderProps {
  children: ReactNode
}

export const AddressContext = createContext({} as AddressData)

export const AddressContextProvider = ({
  children,
}: AddressContextProviderProps) => {
  const [address, setAddress] = useState({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    pagamento: '',
  })

  const setNewAddress = (address: AdressInterface) => setAddress(address)

  return (
    <AddressContext.Provider
      value={{
        address,
        setNewAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}
