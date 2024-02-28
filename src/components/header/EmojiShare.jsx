import React from 'react';
import styled from 'styled-components';
import EmojiOption from './EmojiOption';
import SharedButton from './SharedButton';

const Styled = {
  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 1.3rem;
  `,
  Bar: styled.div`
    width: 0.1rem;
    height: 2.8rem;
    background: #eee;
  `,
};
function EmojiShare() {
  return (
    <Styled.Container>
      <EmojiOption />
      <Styled.Bar />
      <SharedButton />
    </Styled.Container>
  );
}

export default EmojiShare;
