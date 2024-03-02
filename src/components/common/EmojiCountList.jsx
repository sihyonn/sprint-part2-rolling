import React from 'react';
import styled from 'styled-components';
import EmojiBadge from '@components/common/badge/EmojiBadge';

const Styled = {
  ListContainer: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
  `,
};

function EmojiCountList({ data }) {
  return (
    <Styled.ListContainer>
      {data.map((items) => (
        <EmojiBadge key={items.id} emoji={items.emoji} count={items.count} />
      ))}
    </Styled.ListContainer>
  );
}

export default EmojiCountList;
