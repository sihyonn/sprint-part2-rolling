import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';

const setBackgroundColor = css`
  background-color: ${(props) => (props.$profileImg ? 'transparent' : '#fff')};
`;

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 5.6rem; /* 70% of 8rem */
    height: 5.6rem; /* 70% of 8rem */
    padding: 1.68rem;

    border-radius: 100px;
    border: 1px solid #eee;
    background-color: ${({ theme }) => theme.color.mainGr};
    background-image: url(${({ $profileImg }) => $profileImg || ''});
    background-position: top;
    background-size: cover;

    cursor: ${({ $permitOnSelect }) =>
      $permitOnSelect ? 'pointer' : 'default'};
  `,
  Div: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.245rem; /* 70% of 0.35rem */
  `,
  Head: styled.div`
    width: 1.05rem; /* 70% of 1.5rem */
    height: 1.05rem; /* 70% of 1.5rem */
    border-radius: 10rem;
    ${setBackgroundColor}
  `,
  Body: styled.div`
    width: 2.11rem;
    height: 0.91rem;
    border-radius: 15.707px 15.707px 3.141px 3.141px;
    ${setBackgroundColor}
  `,
};

function ProfileBadgeCard({ profileImg, onSelect }) {
  const location = useLocation();
  const { pathname } = location;
  const postPathRegex = /\/post\/\d+\/message/;
  const permitOnSelect = postPathRegex.test(pathname);
  const handleClick = permitOnSelect ? () => onSelect(profileImg) : undefined;
  return (
    <Styled.Container
      $profileImg={profileImg}
      $permitOnSelect={permitOnSelect}
      onClick={handleClick}
    >
      <Styled.Div>
        <Styled.Head $profileImg={profileImg} />
        <Styled.Body $profileImg={profileImg} />
      </Styled.Div>
    </Styled.Container>
  );
}

export default ProfileBadgeCard;
