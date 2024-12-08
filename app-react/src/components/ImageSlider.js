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
    { src: '../assest/img/slider_img1.png', alt: 'Imagen 1' },
    { src: '../assest/img/slider_img2.png', alt: 'Imagen 2' },
    { src: '../assest/img/slider_img3.png', alt: 'Imagen 3' },
    { src: '../assest/img/slider_img4.png', alt: 'Imagen 4' },
    { src: '../assest/img/slider_img5.png', alt: 'Imagen 5' },
    { src: '../assest/img/slider_img6.png', alt: 'Imagen 6' },
   
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
