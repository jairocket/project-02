import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import confirmation from '../../assets/confirmation.svg'
import {
  AdressContainer,
  BlockInfo,
  ClockBackGround,
  ConfirmationContainer,
  CurrencyBackGround,
  FirstContainer,
  PinBackground,
  Subtitle,
  Title,
} from './styles'

export function Confirmation() {
  return (
    <div>
      <Title>Uhu! Pedido Confirmado</Title>
      <Subtitle>Agora é só aguardar que logo o café chega até você</Subtitle>

      <ConfirmationContainer>
        <FirstContainer>
          <AdressContainer>
            <BlockInfo>
              <PinBackground>
                <MapPin color="white" />
              </PinBackground>
              <div>
                <p>
                  Entrega em <span>Rua João Daniel Martinelli, 102</span>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </BlockInfo>
            <BlockInfo>
              <ClockBackGround>
                <Clock color="white" />
              </ClockBackGround>
              <div>
                <p>Previsão de entrega</p>
                <span>20 min - 30 min</span>
              </div>
            </BlockInfo>
            <BlockInfo>
              <CurrencyBackGround>
                <CurrencyDollar color="white" />
              </CurrencyBackGround>
              <div>
                <p>Pagamento na entrega</p>
                <span>Cartão de Crédito</span>
              </div>
            </BlockInfo>
          </AdressContainer>
        </FirstContainer>

        <div>
          <img
            src={confirmation}
            alt="cute drawing of a delivery guy on a purple bike"
          />
        </div>
      </ConfirmationContainer>
    </div>
  )
}
