import React from 'react';
import styled from 'styled-components';
import EmojiCountList from '@components/common/EmojiCountList';

const Styled = {
  Container: styled.div`
    display: flex;
    position: absolute;
    top: 4.5rem;
    left: -25rem;
    padding: 2.4rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    border-radius: 0.8rem;
    border: 1px solid #b6b6b6;
    background: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.boxShadow.card};
    z-index: 10;

    @media (max-width: 767px) {
      left: -22rem;
    }
  `,
};

function EmojiExpand({ data1, data2 }) {
  return (
    <Styled.Container>
      <EmojiCountList data={data1} />
      <EmojiCountList data={data2} />
    </Styled.Container>
  );
}

export default EmojiExpand;

/* EmojiExpand내에서 fetch 해서 data 받아오기 
(pc버전 일때 limit = 4 offset 0,4) (tablet mobile 버전시 limit=3 offset 0,3)*/
