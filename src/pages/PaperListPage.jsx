import React from 'react';
import Carousel from '@components/ListPage/Carousel';
import styled from 'styled-components';
import Button from '@components/common/button/Button';

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
      backgroundColor: 'green',
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
      backgroundColor: 'beige',
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
      backgroundColor: 'blue',
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
  H2: styled.h2`
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    margin-top: 5rem;
    margin-bottom: 2.5rem;
  `,
  Container1: styled.div`
    text-align: center;
    margin: 2.4rem 0;
  `,
};

function PaperListPage() {
  return (
    <>
      <div>
        <div>
          <Styled.H2>인기 롤링 페이퍼 🔥</Styled.H2>
        </div>
        <Carousel data={mock_data} />
      </div>
      <div>
        <Styled.H2>최근에 만든 롤링 페이퍼 ⭐️️</Styled.H2>
      </div>
      <div>
        <Carousel data={mock_data} />
      </div>
      <Styled.Container1>
        <Button className="Button" size="M">
          나도 만들어보기
        </Button>
      </Styled.Container1>
    </>
  );
}

export default PaperListPage;
