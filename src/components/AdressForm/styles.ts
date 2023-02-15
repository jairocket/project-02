import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 0.75rem;

  width: 40rem;
  height: 23.25rem;

  background-color: ${(props) => props.theme['card']};
  border-radius: 6px;
`
const BaseInput = styled.input`
  padding: 0.75rem;
  height: 4.5rem;
  background-color: ${(props) => props.theme['input']};
  border: 1px solid ${(props) => props.theme['button']};
  color: ${(props) => props.theme['label']};
  border-radius: 4px;
  height: 42px;
  font-size: 14px;
`
export const DefaultInput = styled(BaseInput)`
  width: 200px;
`
export const StreetInput = styled(BaseInput)`
  width: 560px;
`
export const ComplementInput = styled(BaseInput)`
  width: 348px;
`
export const CityInput = styled(BaseInput)`
  width: 276px;
`
export const UfInput = styled(BaseInput)`
  width: 60px;
`
