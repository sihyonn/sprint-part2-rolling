import React from 'react';
import Slider from 'react-slick';
import { useRef } from 'react';
import CardItem from '@components/ListPage/CardItem';
import preArrImg from 'src/assets/prearrow.svg';
import nextArrImg from 'src/assets/nextarrow.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

//div className="qwe"
const Styled = {
  Container: styled.div`
    position: relative;
    .slick-list {
      width: 1200px;

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
    @media (max-width: 76.8rem) {
      display: none;
    }
  `,
  PreArrow: styled.div`
    position: absolute;
    top: 40%;
    left: -2%;
    cursor: pointer;
    @media (max-width: 76.8rem) {
      display: none;
    }
  `,
};

function Carousel({ data }) {
  const slickRef = useRef(null);
  const PrevArrow = (props) => {
    slickRef.current?.slickPrev();
    console.log(props);
  };

  const NextArrow = () => {
    slickRef.current?.slickNext();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1247,
        settings: {
          infinite: true,
        },
      },
    ],
  };

  return (
    <div>
      <Styled.Container>
        <Slider {...settings} ref={slickRef}>
          {data.results.map((value) => {
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
        <Styled.PreArrow role="presentation" onClick={PrevArrow}>
          <img src={preArrImg} alt="pre" />
        </Styled.PreArrow>
        <Styled.NextArrow role="presentation" onClick={NextArrow}>
          <img src={nextArrImg} alt="next" />
        </Styled.NextArrow>
      </Styled.Container>
    </div>
  );
}
export default Carousel;
