import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/Themes/default'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/globals'

import { Router } from './Router'
import { CheckoutContextProvider } from './contexts/checkoutContext'
import { AddressContextProvider } from './contexts/addressContext'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CheckoutContextProvider>
          <AddressContextProvider>
            <Header />
            <Router />
          </AddressContextProvider>
        </CheckoutContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
