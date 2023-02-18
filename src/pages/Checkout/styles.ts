import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;

  h2 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['subtitle']};
    line-height: 1.3;
    margin-top: 40px;
    margin-bottom: 15px;
  }
`
export const CheckoutSummary = styled.div`
  background-color: ${(props) => props.theme['card']};
  border-radius: 6px 44px;
  padding: 1.5rem;
`
