import React from 'react';

import styled from 'styled-components';
import { css } from 'styled-components';

const setBackgroundColor = css`
  background-color: ${(props) => (props.profileImg ? 'transparent' : '#fff')};
`;

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 8rem;
    height: 8rem;
    padding: 2.4rem;

    border-radius: 100px;

    background-color: ${({ theme }) => theme.color.mainGr};
    background-image: url(${(props) => props.profileImg || ''});
    background-position: top;
    background-size: cover;
  `,
  Div: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.35rem;
  `,
  Head: styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 10rem;
    ${setBackgroundColor}
  `,
  Body: styled.div`
    width: 3.02rem;
    height: 1.3rem;
    border-radius: 15.707px 15.707px 3.141px 3.141px;
    ${setBackgroundColor}
  `,
};

function ProfileBadgeSelect({ profileImg }) {
  return (
    <Styled.Container profileImg={profileImg}>
      <Styled.Div>
        <Styled.Head profileImg={profileImg} />
        <Styled.Body profileImg={profileImg} />
      </Styled.Div>
    </Styled.Container>
  );
}

export default ProfileBadgeSelect;
