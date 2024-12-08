// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HamburgerMenu from './components/HamburgerMenu';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';
import Hombres from './components/Hombres';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/hombres" element={<Hombres />} /> {Hombres.js}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
