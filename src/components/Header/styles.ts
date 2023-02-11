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
