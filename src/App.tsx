// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Themes/default'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/globals'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  )
}

export default App
