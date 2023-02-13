import styled from 'styled-components'

export const CoffeeCardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10rem;
`
export const CoffeeCardHeading = styled.h2`
  margin: 1.5rem 0;
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  color: ${(props) => props.theme['subtitle']};
`
