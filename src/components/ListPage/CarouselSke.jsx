import styled from 'styled-components';
import CardItemSke from './CardItemSke';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Styled = {
  Container: styled.div`
    position: relative;
    .slick-list {
      width: 1198px;
      transform: translate3d(0, 0, 0);
      @media (max-width: 767px) {
        width: 900px;
      }
    }
  `,
};

function CarouselSke() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    swipeToSlide: false,
    draggable: false,
    touchMove: false,
    cssEase: 'ease-in-out',
    initialSlide: 0,
  };
  return (
    <div>
      <Styled.Container>
        <Slider {...settings}>
          <div>
            <CardItemSke />
          </div>
          <div>
            <CardItemSke />
          </div>
          <div>
            <CardItemSke />
          </div>
          <div>
            <CardItemSke />
          </div>
        </Slider>
      </Styled.Container>
    </div>
  );
}

export default CarouselSke;
