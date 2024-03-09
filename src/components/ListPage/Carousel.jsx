import React, { useState } from 'react';
import Slider from 'react-slick';
import { useRef } from 'react';
import CardItem from '@components/ListPage/CardItem';
import preArrImg from 'src/assets/prearrow.svg';
import nextArrImg from 'src/assets/nextarrow.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import CarouselSke from './CarouselSke';

const Styled = {
  Container: styled.div`
    position: relative;
    .slick-list {
      width: 1198px;
      transform: translate3d(0, 0, 0);
      @media (min-width: 768px) and (max-width: 1247px) {
        margin-left: -24px;
        padding-left: 16px;
      }
      @media (max-width: 767px) {
        width: 900px;
        margin-left: -24px;
        padding-left: 16px;
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

/**
 * react-slick 라이브러리를 이용해 만든 Carousel 컴포넌트입니다.
 *
 * @component
 * @param {Object} data - Carousel에 표시할 데이터 객체
 * @returns {JSX.Element} Carousel 컴포넌트의 JSX 요소
 *
 * @typedef {Object} Settings - react-slick의 내장 api를 적어놓는 객체
 * @property {boolean} dots - 점 표시 여부
 * @property {boolean} infinite - 무한 반복 여부
 * @property {number} speed - 슬라이드 전환 속도
 * @property {number} slidesToShow - 표시할 슬라이드 수
 * @property {number} slidesToScroll - 슬라이드를 넘길 때 이동할 슬라이드 수
 * @property {boolean} arrows - 화살표 표시 여부
 * @property {boolean} swipeToSlide - 스와이프로 슬라이드 이동 여부
 * @property {boolean} draggable - 드래그로 슬라이드 이동 여부
 * @property {boolean} touchMove - 터치로 슬라이드 이동 여부
 * @property {string} cssEase - 슬라이드 전환 애니메이션 이징
 * @property {number} initialSlide - 초기 슬라이드 인덱스
 * @property {Function} beforeChange - 슬라이드 전환 이전 콜백 함수
 * @property {boolean} focusOnSelect - 슬라이드 선택 시 포커스 여부
 * @property {Array} responsive - 반응형 설정 배열(breakpoint는 px입니다!)
 */
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
    return <CarouselSke />;
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
