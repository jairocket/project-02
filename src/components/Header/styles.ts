import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`

export const MapPinAndCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const MapPinContainer = styled.div`
  padding: 0.45rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme['purple-light']};
  div {
    margin-left: 0.25rem;
    color: ${(props) => props.theme['purple']};
  }
`

export const ShoppingCartContainer = styled.div`
  padding: 0.45rem;
  background-color: ${(props) => props.theme['yellow-light']};
`
