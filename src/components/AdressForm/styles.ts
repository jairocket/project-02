import styled from 'styled-components'

export const Form = styled.form`
  gap: 0.75rem;
`
export const FormDiv = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  width: 40rem;
  height: 23.25rem;
  background-color: ${(props) => props.theme['card']};
  border-radius: 6px;
  margin-bottom: 0.75rem;
`

export const PaymentDiv = styled.div`
  padding: 2.5rem;
  height: 12, 9375rem;
  width: 40rem;
  background-color: ${(props) => props.theme['card']};
  border-radius: 6px;
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.75rem;
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
export const ButtonInput = styled(BaseInput)`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  opacity: 0.011;
  z-index: 100;

  :checked + label {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple']};
    border-radius: 4px;
  }
`

export const RadioButton = styled.div`
  float: left;
  width: 178.67px;
  height: 51px;
  position: relative;
  background-color: ${(props) => props.theme['input']};
  border: 1px solid ${(props) => props.theme['button']};
  color: ${(props) => props.theme['label']};
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 14px;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;

    z-index: 90;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const AddressFormTitle = styled.div`
  display: flex;
  gap: 0.25rem;
  div {
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto';
    line-height: 1.3;
    margin-bottom: 1.5rem;
    h6 {
      font-size: 1rem;
      color: ${(props) => props.theme['subtitle']};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['text']};
    }
  }
`
