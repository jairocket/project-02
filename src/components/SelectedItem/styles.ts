import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ItemDataContainer = styled.div`
  display: flex;
  gap: 3.6875rem;
  height: 5rem;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;

  div {
    img {
      height: 4rem;
      width: 4 rem;
    }
  }
`
export const InputButtonContainer = styled.div`
  width: 10.6875rem;
  display: flex;
  gap: 0.5rem;

  button {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    justify-content: center;
    width: 5.6875rem;
    background-color: ${(props) => props.theme['button']};
    border-radius: 6px;
    box-shadow: 0 0 0 0;
    border: none;
    font-family: 'Roboto';
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${(props) => props.theme['text']};
  }
`
export const CoffeeTitle = styled.h6`
  font-size: 1rem;
  line-height: 1.3;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${(props) => props.theme[`subtitle`]};
  margin-bottom: 0.5rem;
`
export const TitleInputButton = styled.div`
  display: flex;
  align-items: center;
  width: 16rem;
  height: 4rem;
`
export const Divider = styled.div`
  width: 23rem;
  height: 0;
  border: 1px solid ${(props) => props.theme['button']};
  margin: 1.5rem;
`
export const ImageDataContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`
export const PriceContainer = styled.div`
  padding-right: 1rem;
  color: ${(props) => props.theme['text']};
  font-weight: 700;
`
