import React, { useContext } from 'react';
import Slider from 'react-slick';
import { CartContext } from '../CartContext';
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
    { src: '/images/image1.jpg', alt: 'Imagen 1', title: 'Producto 1', price: 10 },
    { src: '/images/image2.jpg', alt: 'Imagen 2', title: 'Producto 2', price: 15 },
    { src: '/images/image3.jpg', alt: 'Imagen 3', title: 'Producto 3', price: 20 },
    { src: '/images/image4.jpg', alt: 'Imagen 4', title: 'Producto 4', price: 25 },
    { src: '/images/image5.jpg', alt: 'Imagen 5', title: 'Producto 5', price: 30 },
    { src: '/images/image6.jpg', alt: 'Imagen 6', title: 'Producto 6', price: 35 },
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
