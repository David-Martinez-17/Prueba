import React, { useContext } from 'react';
import Slider from 'react-slick';
import { CartContext } from './CartContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

const ImageSlider = () => {
  const { addToCart } = useContext(CartContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ],
  };

  const images = [
    { id: 1, src: './assest/img/slider_img1.png', alt: 'Imagen 1', title: 'Producto 1', price: 10 },
    { id: 2, src: './assest/img/slider_img2.png', alt: 'Imagen 2', title: 'Producto 2', price: 15 },
    { id: 3, src: './assest/img/slider_img3.png', alt: 'Imagen 3', title: 'Producto 3', price: 20 },
    { id: 4, src: './assest/img/slider_img4.png', alt: 'Imagen 4', title: 'Producto 4', price: 25 },
    { id: 5, src: './assest/img/slider_img5.png', alt: 'Imagen 5', title: 'Producto 5', price: 30 },
    { id: 6, src: './assest/img/slider_img6.png', alt: 'Imagen 6', title: 'Producto 6', price: 35 },
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} className="slider-image" />
          <h3>{image.title}</h3>
          <p>${image.price}</p>
          <button onClick={() => addToCart(image)}>Añadir a la bolsa</button>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
