// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Themes/default'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/globals'
import { LandPageSection } from './components/LandingPage'
import { CoffeeCardList } from './components/CoffeeCardList'
import { menu } from './menu-data'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <LandPageSection />
      <CoffeeCardList menu={menu} />
    </ThemeProvider>
  )
}

export default App
