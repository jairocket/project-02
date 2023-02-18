import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  margin-right: 1rem;
  width: 15rem;
  height: 18rem;
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

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  line-height: 2;
  margin-top: 1.5rem;
  align-items: center;

  p {
    color: ${(props) => props.theme['text']};
  }

  span {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${(props) => props.theme['text']};
    margin: 0 0.25rem;
  }
`
export const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const CheckoutButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 38px;
  height: 38px;
  background-color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  box-shadow: none;
  overflow: hidden;
  border: none;

  &:hover {
    box-shadow: none;
    background-color: ${(props) => props.theme['purple']};
  }
`
