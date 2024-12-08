
import React from 'react';
import Header from './components/Header';
import HamburgerMenu from './components/HamburgerMenu';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <HamburgerMenu />
        <Body />
        <Footer />
      
      </div>
  );
}

export default App;
