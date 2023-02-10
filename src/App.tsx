// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Themes/default'
import { Header } from './components/Header'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
    </ThemeProvider>
  )
}

export default App
