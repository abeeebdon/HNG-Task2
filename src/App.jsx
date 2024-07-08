import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Headers from './components/Headers'

import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Checkout from './pages/Checkout'
import Success from './pages/Success'

const App = () => {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/products" element={<Products />} />

        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </div>
  )
}
export default App
