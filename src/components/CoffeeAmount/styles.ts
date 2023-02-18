import styled from 'styled-components'

export const InputButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 1rem;
  text-align: center;
  color: ${(props) => props.theme['title']};
  background-color: ${(props) => props.theme['button']};
  align-items: center;
  border-radius: 6px;
  width: 72px;
  height: 38px;
  padding: 0.5rem;
  gap: 0.25rem;

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
    background: transparent;
    border: none;
    text-align: center;
    font-size: 1rem;
    color: ${(props) => props.theme['title']};
  }
`
