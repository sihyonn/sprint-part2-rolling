import React from 'react';
import styled from 'styled-components';
import ProfileBadgeCount from '@/components/header/ProfileBadgeCount';
import ProfileBadgeFirst from '@components/header/ProfileBadgeFirst';
import ProfileBadgeSecond from '@components/header/ProfileBadgeSecond';
import ProfileBadgeThird from '@components/header/ProfileBadgeThird';

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

function ProfileList({ data }) {
  const isCountBadge = data.messageCount > 3 ? true : false;
  return (
    <Styled.Container>
      <Styled.ListContainer>
        {data.messageCount >= 1 && (
          <ProfileBadgeFirst
            profileImg={data.recentMessages[0].profileImageURL}
            count={data.messageCount}
          />
        )}
        {data.messageCount >= 2 && (
          <ProfileBadgeSecond
            profileImg={data.recentMessages[1].profileImageURL}
            count={data.messageCount}
          />
        )}
        {data.messageCount >= 3 && (
          <ProfileBadgeThird
            profileImg={data.recentMessages[2].profileImageURL}
            count={data.messageCount}
          />
        )}
        {isCountBadge && <ProfileBadgeCount count={data.messageCount - 3} />}
      </Styled.ListContainer>
      <Styled.CountInfoContainer>
        <span>{data.messageCount}명이 작성했어요!</span>
      </Styled.CountInfoContainer>
    </Styled.Container>
  );
}

export default ProfileList;
