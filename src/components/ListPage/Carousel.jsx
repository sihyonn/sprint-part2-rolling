import React, { useState } from 'react';
import Slider from 'react-slick';
import { useRef } from 'react';
import CardItem from '@components/ListPage/CardItem';
import preArrImg from 'src/assets/prearrow.svg';
import nextArrImg from 'src/assets/nextarrow.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const Styled = {
  Container: styled.div`
    position: relative;
    .slick-list {
      width: 1198px;
      transform: translate3d(0, 0, 0);
      @media (max-width: 360px) {
        width: 900px;
      }
    }
  `,

  NextArrow: styled.div`
    position: absolute;
    top: 40%;
    right: 0%;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
    @media (max-width: 1247px) {
      display: none;
    }
  `,
  PreArrow: styled.div`
    position: absolute;
    top: 40%;
    left: -2%;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
    @media (max-width: 1247px) {
      display: none;
    }
  `,
};

function Carousel({ data }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleBeforeChange = (oldIndex, newIndex) => {
    setSlideIndex(newIndex);
  };
  const slickRef = useRef(null);
  const PrevArrow = () => {
    slickRef.current?.slickPrev();
  };

  const NextArrow = () => {
    slickRef.current?.slickNext();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    swipeToSlide: false,
    draggable: false,
    touchMove: false,
    cssEase: 'ease-in-out',
    initialSlide: 0,
    slideToShow: 1,
    beforeChange: handleBeforeChange,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1247,
        settings: {
          infinite: true,
          initialSlide: 0,
          slidesToScroll: 1,
          swipeToSlide: true,
          draggable: true,
          touchMove: true,
        },
      },
    ],
  };

  const slideCount = data?.results.length;
  if (!data || data.results.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Styled.Container>
          <Slider {...settings} ref={slickRef}>
            {data?.results.map((value) => {
              return (
                <div key={value.id}>
                  <CardItem
                    id={value.id}
                    name={value.name}
                    color={value.backgroundColor}
                    cardUrl={value.backgroundImageURL}
                    messageCount={value.messageCount}
                    recentMessages={value.recentMessages}
                    topReactions={value.topReactions}
                  />
                </div>
              );
            })}
          </Slider>
          {slideIndex !== 0 && (
            <Styled.PreArrow role="presentation" onClick={PrevArrow}>
              <img src={preArrImg} alt="pre" />
            </Styled.PreArrow>
          )}
          {slideIndex !== slideCount - 4 && (
            <Styled.NextArrow role="presentation" onClick={NextArrow}>
              <img src={nextArrImg} alt="next" />
            </Styled.NextArrow>
          )}
        </Styled.Container>
      </div>
    );
  }
}
export default Carousel;
