import styled from 'styled-components'
export const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  justify-content: center;
  width: 32.875rem;
  height: 16.75rem;
  gap: 2rem;
`
export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6.375rem;
  justify-content: space-between;
  padding: 3rem 0;
`
export const FirstContainer = styled.div`
  border: 1px;
  border-color: ${(props) => props.theme['purple-dark']};
  box-sizing: border-box;
  border-radius: 6px 36px;
  border-style: solid;
`
export const BlockInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  color: ${(props) => props.theme['text']};

  span {
    font-weight: 700;
  }
`
const IconBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`
export const PinBackground = styled(IconBackground)`
  background-color: ${(props) => props.theme['purple']};
`
export const ClockBackGround = styled(IconBackground)`
  background-color: ${(props) => props.theme['yellow']};
`

export const CurrencyBackGround = styled(IconBackground)`
  background-color: ${(props) => props.theme['yellow-dark']};
`
export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  color: ${(props) => props.theme['yellow-dark']};
`
export const Subtitle = styled.p`
  color: ${(props) => props.theme['subtitle']};
  font-size: 1.25rem;
`
