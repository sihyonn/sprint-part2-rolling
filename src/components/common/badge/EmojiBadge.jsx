import React from 'react';
import styled from 'styled-components';

const Styled = {
  Container: styled.div`
    display: inline-flex;
    width: 6.6rem;
    height: 3.6rem;
    padding: 0.8rem 1.2rem;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    border-radius: 3.2rem;
    background: ${({ theme }) => theme.color.badgeBg};
    overflow: hidden;
  `,
  Count: styled.span`
    color: ${({ theme }) => theme.color.white};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
  `,
  Emoji: styled.span`
    font-size: 1.4rem;
  `,
};
function EmojiBadge({ emoji, count }) {
  return (
    <Styled.Container>
      {emoji && <Styled.Emoji>{emoji}</Styled.Emoji>}
      <Styled.Count>{count}</Styled.Count>
    </Styled.Container>
  );
}

export default EmojiBadge;
