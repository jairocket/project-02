import styled from 'styled-components'

export const SubmitButton = styled.button`
  border: none;
  color: ${(props) => props.theme[`white`]};
  background-color: ${(props) => props.theme['yellow']};
  border-radius: 6px;
  width: 23rem;
  height: 2.875rem;
  font-size: 0.875rem;
  font-family: 'Roboto';
  font-weight: 700;
`

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  width: 23rem;

  tbody {
    tr {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 23rem;

      margin-bottom: 0.5rem;
      font-family: 'Roboto';
      font-size: 0.875rem;
      color: ${(props) => props.theme['text']};

      span {
        font-size: 1rem;
      }
    }
  }
  tfoot {
    tr {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 23rem;

      margin-bottom: 1.5rem;
      font-family: 'Roboto';
      font-size: 1.25rem;
      color: ${(props) => props.theme['subtitle']};
    }
  }
`
