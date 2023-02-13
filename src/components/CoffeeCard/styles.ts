import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  margin-right: 1rem;
  width: 15rem;
  height: 20rem;
  background-color: ${(props) => props.theme['card']};
  padding: 0.5rem;
  border-radius: 6px 36px;

  h6 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 20px;
    line-height: 1.3;
    color: ${(props) => props.theme['subtitle']};

    position: relative;
    bottom: 1.25rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
    color: ${(props) => props.theme['label']};
  }
`

export const CoffeeImageContainer = styled.div`
  position: relative;
  bottom: 2.25rem;
`

export const TagsContainer = styled.div`
  position: relative;
  bottom: 2.25rem;

  span {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 10px;
    line-height: 1.3;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0.1rem 0.3rem;
    border-radius: 100px;
    margin: 0.15rem;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const InputContainer = styled.div`
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
    width: 20px;
  }
`
