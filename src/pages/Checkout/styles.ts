import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;

  h2 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['subtitle']};
    line-height: 1.3;
    margin-top: 40px;
  }
`
export const Title = styled.h2`
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['subtitle']};
  line-height: 1.3;
  margin-top: 40px;
  position: relative;
  left: 27rem;
`
export const TitleDiv = styled.div`
  display: flex;
`
