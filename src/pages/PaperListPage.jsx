import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '@components/ListPage/Carousel';
import styled from 'styled-components';
import Button from '@components/common/button/Button';

const mock_data = {
  count: 5,
  next: 'https://rolling-api.vercel.app/0-3/recipients/?limit=3&offset=4&sort=like',
  previous: 'https://rolling-api.vercel.app/0-3/recipients/?limit=3&sort=like',
  results: [
    {
      id: 11,
      name: 'Yoonsang',
      backgroundColor: 'blue',
      backgroundImageURL: null,
      createdAt: '2023-10-31T09:58:37.631384Z',
      messageCount: 2,
      recentMessages: [
        {
          id: 28,
          recipientId: 11,
          sender: '김현일',
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
          id: 13,
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
          id: 11,
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
          id: 16,
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
      id: 22,
      name: '김현일',
      backgroundColor: 'beige',
      backgroundImageURL: null,
      createdAt: '2023-10-31T09:58:37.631384Z',
      messageCount: 3,
      recentMessages: [
        {
          id: 28,
          recipientId: 22,
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
          recipientId: 22,
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
          recipientId: 22,
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
      id: 33,
      name: '최준영',
      backgroundColor: 'purple',
      backgroundImageURL: null,
      createdAt: '2023-10-31T09:58:37.631384Z',
      messageCount: 1,
      recentMessages: [
        {
          id: 28,
          recipientId: 33,
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
      id: 44,
      name: '김예진',
      backgroundColor: 'green',
      backgroundImageURL: null,
      createdAt: '2023-10-31T09:58:37.631384Z',
      messageCount: 6,
      recentMessages: [
        {
          id: 28,
          recipientId: 44,
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
          recipientId: 44,
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
          recipientId: 44,
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
          recipientId: 44,
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
          recipientId: 44,
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
          recipientId: 44,
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
      id: 55,
      name: '김시현',
      backgroundColor: 'purple',
      backgroundImageURL: null,
      createdAt: '2023-10-31T09:58:37.631384Z',
      messageCount: 6,
      recentMessages: [
        {
          id: 28,
          recipientId: 55,
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
          recipientId: 55,
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
          recipientId: 55,
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
          recipientId: 55,
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
          recipientId: 55,
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
          recipientId: 55,
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
  Popular: styled.h2`
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 2.5rem;
    @media (max-width: 767px) {
      margin-bottom: 1.2rem;
    }
  `,
  Recent: styled.h2`
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    margin-top: 7.4rem;
    margin-bottom: 2.5rem;
    @media (max-width: 767px) {
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
  const navigate = useNavigate();
  const goToPostPage = () => {
    navigate(`/post`);
  };
  return (
    <>
      <div>
        <div>
          <Styled.Popular>인기 롤링 페이퍼 🔥</Styled.Popular>
        </div>
        <Carousel data={mock_data} />
      </div>
      <div>
        <Styled.Recent>최근에 만든 롤링 페이퍼️️ ⭐️️</Styled.Recent>
      </div>
      <div>
        <Carousel data={mock_data} />
      </div>
      <Styled.Container1>
        <Button
          onClick={goToPostPage}
          className="Button"
          size="M"
          style={{ width: '100%' }}
        >
          나도 만들어보기
        </Button>
      </Styled.Container1>
    </>
  );
}

export default PaperListPage;
