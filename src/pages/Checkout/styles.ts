import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 2rem;

  h2 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['subtitle']};
    line-height: 1.3;
    margin-top: 40px;
    margin-bottom: 15px;
  }
`
