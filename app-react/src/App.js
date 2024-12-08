// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HamburgerMenu from './components/HamburgerMenu';
import Body from './components/Body';
import Footer from './components/Footer';
import Hombres from './components/Hombres';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/hombres" element={<Hombres />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
