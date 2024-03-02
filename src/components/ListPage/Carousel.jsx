import React from 'react';
import Slider from 'react-slick';
import { useRef } from 'react';
import CardSample from '@components/common/CardSample';
import preArrImg from 'src/assets/prearrow.svg';
import nextArrImg from 'src/assets/nextarrow.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const mock_data = {
  count: 5,
  next: 'https://rolling-api.vercel.app/0-3/recipients/?limit=3&offset=4&sort=like',
  previous: 'https://rolling-api.vercel.app/0-3/recipients/?limit=3&sort=like',
  results: [
    {
      id: 14,
      name: '이윤수',
      backgroundColor: 'purple',
      backgroundImageURL: null,
      createdAt: '2023-11-01T08:01:30.234149Z',
      messageCount: 0,
      recentMessages: [],
      reactionCount: 0,
      topReactions: [],
    },
    {
      id: 14,
      name: '이윤수',
      backgroundColor: 'purple',
      backgroundImageURL: null,
      createdAt: '2023-11-01T08:01:30.234149Z',
      messageCount: 0,
      recentMessages: [],
      reactionCount: 0,
      topReactions: [],
    },
    {
      id: 14,
      name: '이윤수',
      backgroundColor: 'purple',
      backgroundImageURL: null,
      createdAt: '2023-11-01T08:01:30.234149Z',
      messageCount: 0,
      recentMessages: [],
      reactionCount: 0,
      topReactions: [],
    },
    {
      id: 14,
      name: '이윤수',
      backgroundColor: 'purple',
      backgroundImageURL: null,
      createdAt: '2023-11-01T08:01:30.234149Z',
      messageCount: 0,
      recentMessages: [],
      reactionCount: 0,
      topReactions: [],
    },
    {
      id: 11,
      name: '손동욱',
      backgroundColor: 'purple',
      backgroundImageURL: null,
      createdAt: '2023-10-31T09:58:37.631384Z',
      messageCount: 6,
      recentMessages: [
        {
          id: 28,
          recipientId: 11,
          sender: 'test user2',
          profileImageURL:
            'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
          relationship: '지인',
          content: '테스트 목적의 메세지3',
          font: '나눔명조',
          createdAt: '2023-10-31T09:58:47.272896Z',
        },
        {
          id: 27,
          recipientId: 11,
          sender: 'test user2',
          profileImageURL:
            'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
          relationship: '지인',
          content: '테스트 목적의 메세지3',
          font: '나눔명조',
          createdAt: '2023-10-31T09:58:46.889479Z',
        },
      ],
      reactionCount: 23,
      topReactions: [
        {
          id: 24,
          emoji: '😀',
          count: 15,
        },
        {
          id: 25,
          emoji: '🥹',
          count: 8,
        },
      ],
    },
  ],
};

const Styled = {
  Container: styled.div`
    position: relative;
  `,
  NextArrow: styled.div`
    position: absolute;
    top: 40%;
    right: 0%;
  `,
  PreArrow: styled.div`
    position: absolute;
    top: 40%;
    left: -2%;
  `,
};

function Carousel() {
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
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <Styled.Container>
        <Slider {...settings} ref={slickRef}>
          {mock_data.results.map((value) => {
            return (
              <div key={value.id}>
                <CardSample
                  cardUrl={value.backgroundImageURL}
                  usage="list"
                  color={value.backgroundColor}
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
/* <div>
  <CardSample usage="list" color="green" />
</div>; */
