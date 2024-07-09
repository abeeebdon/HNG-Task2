import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Headers from './components/Headers'

import Products from './pages/Products'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <Headers />

      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  )
}
export default App
