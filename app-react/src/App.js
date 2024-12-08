
import React from 'react';
import Header from './components/Header';
import HamburgerMenu from './components/HamburgerMenu';
import Body from './components/Body';
import Footer from './components/Footer';
import App2 from './App2';
import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <HamburgerMenu />
        <Body />
        <Footer />
        <App2 />
      </div>
  );
}

export default App;
