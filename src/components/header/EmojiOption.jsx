import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import EmojiList from './EmojiList';
import EmojiAddButton from './EmojiAddButton'; //team recipient_id 필요
import useGetReactionsQuery from '@hooks/api/recipientsAPI/useGetReactions';
import { API_RECIPIENTS } from '@constants/API';
import recipientsAPI from '@/api/recipientsAPI';
const Styled = {
  EmojiContainer: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;

    @media (max-width: 767px) {
      gap: ${({ $count }) => {
        switch ($count) {
          case 0:
            return 'calc(100vw - 19.4rem)';
          case 1:
            return 'calc(100vw - 26.2rem)';
          case 2:
            return 'calc(100vw - 33.6rem)';
          default:
            return 'calc(100vw - 41rem)';
        }
      }};
    }
  `,
};

//data header에서 api받아오기
function EmojiOption({ EmojiData }) {
  const { id: user_id } = useParams();
  const { data: ReactionData } = useGetReactionsQuery(
    API_RECIPIENTS.REACTIONS(user_id),
    recipientsAPI.getReactions,
    user_id,
    4,
    0,
  );
  const { id, topReactions } = EmojiData;
  const EmojiCountData = { topReactions };
  return (
    <Styled.EmojiContainer $count={ReactionData?.count}>
      <EmojiList EmojiCountData={EmojiCountData} count={ReactionData?.count} />
      <EmojiAddButton id={id} />
    </Styled.EmojiContainer>
  );
}

export default EmojiOption;
