import React, { useState, createContext } from 'react'
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ProductPage from './pages/ProductPage';
import products from './products'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Collections from './pages/Collections';
import MenCollection from './pages/MenCollection';
import WomenCollection from './pages/WomenCollection';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import { AuthContextProvider } from './AuthContext';
import Register from './components/Register';
import NavAccount from './components/NavAccount';

export const AppContext = createContext()

function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  function addToCart(product, qty, size) {
    const cartFind = cart.find(item => item.id === product.id && item.size === size)
    const cartIndex = cart.indexOf(cartFind)
    if (cartFind) {
      setCart(prevState => cart.map(item => 
        item.id === product.id ? {
          ...item,
          quantity: prevState[cartIndex].quantity + +qty
          } :
          item
      ))
    } else {
      setCart([...cart, {...product, quantity: qty, size: size}])
    }
  }

  function removeFromCart(id, size) {
    setCart(cart.filter(item => (+item?.size + +item?.id !== +id + +size)))
  }

  const toggleCart = (e) => {
    if (cartOpen) {
      closeModal()
      return;
    }
    setCartOpen(true)
    e.stopPropagation()
    document.addEventListener('click', closeModal)
  }

  const closeModal = () => {
    setCartOpen(false)
    document.removeEventListener("click", closeModal);
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <AuthContextProvider>
          <AppContext.Provider value={{cart, setCart, addToCart, removeFromCart, toggleCart}}>
            <Nav setCartOpen={setCartOpen} cartOpen={cartOpen} toggleCart={toggleCart} closeModal={closeModal}/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sneakers/:url' element={<ProductPage products={products}/>} />
              <Route path='/collections' element={<Collections/>} />
              <Route path='/collections/men' element={<MenCollection products={products} />} />
              <Route path='/collections/women' element={<WomenCollection products={products} />} />
              <Route path='/modal' element={<NavAccount />} />
            </Routes>
            <Footer />
          </AppContext.Provider>
        </AuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
