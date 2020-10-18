import React, { useState } from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss'
import { products } from '../../services/fakeAPI';
const SliderSlick=()=> {

  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const [settings] = useState(config);

  return (
    <div className='slick'>

      <Slider {...settings} className='slick1'>
        {products.map((item, i) => {
          const {img, title, text} = item; // destructuring

          return <div
            className='img-card'
            key={i}
                 >
            <img
              className='img'
              src={img}
              alt='imageeee'
            />
            <div className='card-body'>
              <div className='card-title'>{title}</div>
              <div className='card-text'>{text}</div>
            </div>
          </div>
        })}
      </Slider>
    </div>
  );
}

export default SliderSlick;
