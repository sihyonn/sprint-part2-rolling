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
      id: 7,
      name: '양윤상',
      backgroundColor: 'blue',
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
    {
      id: 11,
      name: '김현일',
      backgroundColor: 'beige',
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
    {
      id: 3,
      name: '최준영',
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
    {
      id: 2,
      name: '김예진',
      backgroundColor: 'green',
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
    {
      id: 13,
      name: '김시현',
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
        {
          id: 26,
          emoji: '🥹',
          count: 7,
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
    @media (max-width: 767px) {
      margin-top: 4rem;
      margin-bottom: 1.2rem;
    }
  `,
  Container1: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2.4rem 0;

    @media (min-width: 768px) and (max-width: 1247px) {
      width: 100%;
    }
    @media (max-width: 767px) {
      width: 100%;
    }
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
        <Button className="Button" size="M" style={{ width: '100%' }}>
          나도 만들어보기
        </Button>
      </Styled.Container1>
    </>
  );
}

export default PaperListPage;
