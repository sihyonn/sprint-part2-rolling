import React from 'react';
import styled from 'styled-components';
import EmojiList from './EmojiList';
import EmojiAddButton from './EmojiAddButton';
const Styled = {
  EmojiContainer: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
  `,
};

//data header에서 api받아오기
function EmojiOption() {
  return (
    <Styled.EmojiContainer>
      <EmojiList />
      <EmojiAddButton />
    </Styled.EmojiContainer>
  );
}

export default EmojiOption;
