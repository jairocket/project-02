import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/Themes/default'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/globals'

import { Main } from './pages/Main'
import { Router } from './Router'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
