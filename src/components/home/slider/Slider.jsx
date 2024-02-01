"use client"
import React from 'react'
import styles from './Slider.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './SliderCard';
import './slider.css'


const SliderComponent = ({heading,cards}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className={styles.section}>
      <h1 className={styles.heading}>
        {heading}
      </h1>
      <Slider {...settings} className={styles.cardsSection}>
        {
          cards?.map((card,index)=>(
            <Card key={index} img={card.img} title={card.title} description={card.description}/>
          ))
        }
      </Slider>
    </div>
  )
}

export default SliderComponent