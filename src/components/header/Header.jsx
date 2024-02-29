import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfileEmojiShare from '@/components/header/ProfileEmojiShare';

const mockdata = {
  id: 2,
  name: '강영훈',
  backgroundColor: 'green',
  backgroundImageURL: null,
  createdAt: '2023-10-26T13:19:31.401765Z',
  messageCount: 10,
  recentMessages: [
    {
      id: 32,
      recipientId: 2,
      sender: '김하은',
      profileImageURL: '',
      relationship: '가족',
      content: '열심히 일하는 모습 멋있습니다.',
      font: 'Pretendard',
      createdAt: '2023-11-01T08:05:25.399056Z',
    },
    {
      id: 31,
      recipientId: 2,
      sender: '이영준',
      profileImageURL:
        'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
      relationship: '지인',
      content: '항상 응원합니다',
      font: 'Noto Sans',
      createdAt: '2023-11-01T08:04:12.852691Z',
    },
    {
      id: 30,
      recipientId: 2,
      sender: '손동욱',
      profileImageURL: '',
      relationship: '지인',
      content: '멋있어요!',
      font: 'Noto Sans',
      createdAt: '2023-11-01T08:01:52.605133Z',
    },
    {
      id: 30,
      recipientId: 2,
      sender: '손동욱',
      profileImageURL: '',
      relationship: '지인',
      content: '멋있어요!',
      font: 'Noto Sans',
      createdAt: '2023-11-01T08:01:52.605133Z',
    },
  ],
  reactionCount: 105,
  topReactions: [
    {
      id: 34,
      emoji: '👍',
      count: 50,
    },
    {
      id: 28,
      emoji: '😍',
      count: 48,
    },
    {
      id: 26,
      emoji: '🎉',
      count: 46,
    },
    {
      id: 26,
      emoji: '😂',
      count: 30,
    },
    {
      id: 34,
      emoji: '👍',
      count: 24,
    },
    {
      id: 28,
      emoji: '😍',
      count: 18,
    },
    {
      id: 26,
      emoji: '🎉',
      count: 16,
    },
    {
      id: 26,
      emoji: '😂',
      count: 1,
    },
  ],
}; //  'https://rolling-api.vercel.app/{team}/recipients/{id}/'

const Styled = {
  Container: styled.nav`
    display: flex;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
    z-index: 100;
    background: ${({ theme }) => theme.color.white};
    @media (max-width: 767px) {
      display: inline-block;
      top: 0;
    }
  `,
  HeaderContainer: styled.div`
    display: flex;
    width: 100%;
    padding: 1.3rem max(2.4rem, calc((100vw - 120rem) / 2));
    justify-content: space-between;

    @media (max-width: 767px) {
      padding: 1.2rem 2rem;
      height: 6.4rem;
    }
  `,
  MobileContainer: styled.div`
    display: flex;
    height: 6.4rem;
    padding: 1rem 2rem;
    align-items: center;
  `,
  CardOwner: styled.span`
    display: flex;
    align-items: flex-start;
    width: 22.7rem;
    color: #2b2b2b;
    font-family: Pretendard;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.2rem;
    letter-spacing: -0.028rem;
  `,
  Bar: styled.div`
    width: 100%;
    height: 0.1rem;
    background: var(--gray-200, #eee);
  `,
};
function Header({ data = mockdata }) {
  // data는 /list에서 /list{id}로 이동시 페이지에서 보내주기
  const [isMobile, setIsMobile] = useState(false);
  const { messageCount, recentMessages } = data;
  const profileListData = { messageCount, recentMessages };
  const { id, topReactions } = data;
  const EmojiData = { id, topReactions };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? (
    <Styled.Container>
      <Styled.MobileContainer>
        <Styled.CardOwner>To.{data.name}</Styled.CardOwner>
      </Styled.MobileContainer>
      <Styled.Bar />
      <Styled.HeaderContainer>
        <ProfileEmojiShare
          profileData={profileListData}
          EmojiData={EmojiData}
        />
      </Styled.HeaderContainer>
    </Styled.Container>
  ) : (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Styled.CardOwner>To.{data.name}</Styled.CardOwner>
        <ProfileEmojiShare
          profileData={profileListData}
          EmojiData={EmojiData}
        />
      </Styled.HeaderContainer>
    </Styled.Container>
  );
}

export default Header;
