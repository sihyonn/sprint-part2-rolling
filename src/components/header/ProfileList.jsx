import React from 'react';
import styled from 'styled-components';
import ProfileBadgeCount from '@components/header/ProfileBadgeCount';
import ProfileBadgeFirst from '@components/header/ProfileBadgeFirst';
import ProfileBadgeSecond from '@components/header/ProfileBadgeSecond';
import ProfileBadgeThird from '@components/header/ProfileBadgeThird';

const mockdata1 = {
  messageCount: 9,
  recentMessages: [
    {
      id: 32,
      recipientId: 2,
      sender: '김하은',
      profileImageURL:
        'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
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
  ],
};

const Styled = {
  Container: styled.div`
    display: flex;
    align-items: flex-start;
  `,
  ListContainer: styled.div`
    position: relative;
    display: flex;
  `,
  CountInfoContainer: styled.div`
    margin-left: 9.9rem;
    color: #181818;
    font-family: Pretendard;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.7rem;
  `,
};

function ProfileList({ data = mockdata1 }) {
  const isCountBadge = data.messageCount > 3 ? true : false;
  return (
    <Styled.Container>
      <Styled.ListContainer>
        <ProfileBadgeFirst
          profileImg={data.recentMessages[0].profileImageURL}
        />
        <ProfileBadgeSecond
          profileImg={data.recentMessages[1].profileImageURL}
        />
        <ProfileBadgeThird
          profileImg={data.recentMessages[2].profileImageURL}
        />
        {isCountBadge && <ProfileBadgeCount count={data.messageCount - 3} />}
      </Styled.ListContainer>
      <Styled.CountInfoContainer>
        <span>{data.messageCount}명이 작성했어요!</span>
      </Styled.CountInfoContainer>
    </Styled.Container>
  );
}

export default ProfileList;
