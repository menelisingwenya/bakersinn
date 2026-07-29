import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import OrderModal from './components/OrderModal'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Recipes from './pages/Recipes'
import KidsCorner from './pages/KidsCorner'
import Contact from './pages/Contact'
import Donation from './pages/Donation'
import Order from './pages/Order'

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/kids" element={<KidsCorner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
      <OrderModal />
    </div>
  )
}

export default App