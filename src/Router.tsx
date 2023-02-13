import { Routes, Route } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Confirmation } from './pages/Confirmation'
import { Main } from './pages/Main'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  )
}
