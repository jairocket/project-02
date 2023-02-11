import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  margin-right: 2rem;
  width: 14rem;
  height: 310px;
  background-color: ${(props) => props.theme['card']};
  padding: 1rem;
`
