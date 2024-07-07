import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Headers from './components/Headers'

import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </div>
  )
}
export default App
