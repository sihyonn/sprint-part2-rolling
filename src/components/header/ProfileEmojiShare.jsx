import React from 'react';
import styled from 'styled-components';
import ProfileList from '@/components/header/ProfileList';
import EmojiShare from '@/components/header/EmojiShare';

const Styled = {
  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 2.8rem;
    @media (max-width: 1280px) {
      & > *:not(:last-child) {
        display: none;
      }
    }
  `,
  Bar: styled.div`
    width: 0.1rem;
    height: 2.8rem;
    background: #eee;
  `,
};
function ProfileEmojiShare({ profileData, EmojiData }) {
  return (
    <Styled.Container>
      <ProfileList data={profileData} />
      <Styled.Bar />
      <EmojiShare EmojiData={EmojiData} />
    </Styled.Container>
  );
}
export default ProfileEmojiShare;
