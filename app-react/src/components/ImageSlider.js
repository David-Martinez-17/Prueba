// src/components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

const ImageSlider = () => {
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
    { src: '/assest/img/slider_img1', alt: 'Imagen 1' },
    { src: '/images/image2.jpg', alt: 'Imagen 2' },
    { src: '/images/image3.jpg', alt: 'Imagen 3' },
    { src: '/images/image4.jpg', alt: 'Imagen 4' },
    { src: '/images/image5.jpg', alt: 'Imagen 5' },
    { src: '/images/image6.jpg', alt: 'Imagen 6' },
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} className="slider-image" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
