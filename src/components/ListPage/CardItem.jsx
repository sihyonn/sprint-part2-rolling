import React from 'react';
import styled from 'styled-components';
import ProfileList from '@components/header/ProfileList';
import EmojiBadge from '@components/common/badge/EmojiBadge';

const Styled = {
  Card: styled.div`
    display: flex;
    width: 27.5rem;
    height: 26rem;
    border-radius: 1.6rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: ${({ color, theme, $cardUrl }) =>
      $cardUrl
        ? `url(${$cardUrl}) center/cover`
        : (() => {
            switch (color) {
              case 'beige':
                return theme.color.lightOr2;
              case 'purple':
                return theme.color.lightPu2;
              case 'blue':
                return theme.color.lightBl2;
              case 'green':
                return theme.color.lightGn2;
              default:
                return 'none';
            }
          })()};
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    @media (max-width: 360px) {
      width: 20.8rem;
      height: 23.2rem;
    }
  `,
  Name: styled.h2`
    text-overflow: ellipsis;
    /* Font/24 Bold */
    color: #181818;
    font-family: Pretendard;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.6rem; /* 150% */
    letter-spacing: -0.024rem;
  `,
  Container: styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4.3rem;
    margin: 3rem 2.4rem 2rem;
  `,
};

function CardItem({
  name,
  color,
  cardUrl,
  messageCount,
  recentMessages,
  topReactions,
}) {
  return (
    <Styled.Card color={color} $cardUrl={cardUrl}>
      <Styled.Container>
        <div>
          <Styled.Name>To. {name}</Styled.Name>
          <ProfileList data={{ messageCount, recentMessages }} />
        </div>
        <div
          style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}
        >
          {topReactions.map((value) => (
            <EmojiBadge
              key={value.id}
              emoji={value.emoji}
              count={value.count}
            />
          ))}
        </div>
      </Styled.Container>
    </Styled.Card>
  );
}
export default CardItem;
