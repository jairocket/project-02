import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

export const MapPinAndCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const MapPinContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  div {
    margin-left: 0.45rem;
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const ShoppingCartContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
`
export const QuantityContainer = styled.div`
  position: relative;
  bottom: 0.25rem;

  right: 1.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${(props) => props.theme['white']};
  background-color: ${(props) => props.theme['yellow-dark']};
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
`
