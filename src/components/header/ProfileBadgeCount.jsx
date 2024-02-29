import React from 'react';
import styled from 'styled-components';
import background from '@/assets/profileBackgroundIcon.svg';

const Styled = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 6rem;
    width: 2.8rem;
    height: 2.8rem;

    span {
      position: absolute;
      color: #484848;
      font-family: Pretendard;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.8rem;
    }
  `,
};

function ProfileBadgeCount({ count }) {
  return (
    <Styled.Container>
      <img src={background} alt="background" />
      <span>+{count}</span>
    </Styled.Container>
  );
}

export default ProfileBadgeCount;
