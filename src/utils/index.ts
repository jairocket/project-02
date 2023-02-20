export const moneyFormater = (value: number) => {
  const intl = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
  return intl.format(value)
}
