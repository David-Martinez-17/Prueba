import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <div className="body">
      <div className="row">
        <div className="content-section">
          <img src="/assest/img/malva_hombre.jpg" alt="Imagen 1" className="image" />
          <a href="/hombres" className="text-overlay">Hombres</a>
        </div>
        <div className="content-section">
          <img src="/assest/img/malva_mujer.jpg" alt="Imagen 2" className="image" />
          <a href="/mujeres" className="text-overlay">Mujeres</a>
        </div>
      </div>
    </div>
  );
};

export default Body;
