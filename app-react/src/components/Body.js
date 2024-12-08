import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <div className="body">
      <div className="row">
        <div className="content-section">
          <img src="/assest/img/malva_mujer.jpg" alt="Imagen 1" className="image1" />
          <a href="/app2" className="text-overlay">Mujeres</a>
        </div>
        <div className="content-section">
          <img src="/assest/img/malva_hombre.jpg" alt="Imagen 2" className="image1" />
          <a href="/app2" className="text-overlay">Hombres</a>
        </div>
      </div>
      <div className="column">
        <div className="content-section">
          <img src="/assest/img/Global_brands.jpg" alt="Imagen 3" className="image1" />
          <a href="/app2" className="text-overlay">Global Brands</a>
        </div>
        <div className="content-section">
          <img src="/assest/img/Local_brands.jpg" alt="Imagen 4" className="image1" />
          <a href="/app2" className="text-overlay">Local Brands</a>
        </div>
      </div>
    </div>
  );
};

export default Body;
