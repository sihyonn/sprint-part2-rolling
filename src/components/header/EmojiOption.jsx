import React from 'react';
import styled from 'styled-components';
import EmojiList from './EmojiList';
import EmojiAddButton from './EmojiAddButton'; //team recipient_id 필요
const Styled = {
  EmojiContainer: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;

    @media (max-width: 767px) {
      gap: calc(100vw - 40.3rem);
    }
  `,
};

//data header에서 api받아오기
function EmojiOption({ EmojiData }) {
  const { id, topReactions } = EmojiData;
  const EmojiCountData = { topReactions };
  return (
    <Styled.EmojiContainer>
      <EmojiList EmojiCountData={EmojiCountData} />
      <EmojiAddButton id={id} />
    </Styled.EmojiContainer>
  );
}

export default EmojiOption;
