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

/**
 * CardItemSke를 담는 틀의 역할을 하는 스켈레톤 컴포넌트입니다.
 * @returns {JSX.Element} 4개의 CardItemSke가 담겨있습니다.
 *
 */
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
