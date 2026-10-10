import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Produto from './pages/Produto'
import Carrinho from './pages/Carrinho'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo/:categoria" element={<Catalogo />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}
