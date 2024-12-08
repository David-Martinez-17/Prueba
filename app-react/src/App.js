import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HamburgerMenu from './components/HamburgerMenu';
import Body from './components/Body';
import Footer from './components/Footer';
import Hombres from './Hombres';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <HamburgerMenu />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/hombres" element={<Hombres />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
