import React from 'react';
import styled from 'styled-components';
import EmojiBadge from '@components/common/badge/EmojiBadge';
import AvatarList from './AvatarList';

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
    align-items: flex-start;
    cursor: pointer;
    @media (max-width: 360px) {
      width: 20.8rem;
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
    padding: 3rem 2.4rem 2rem;
    width: 100%;
  `,
  Info: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: flex-start;
  `,
  CountInfo: styled.div`
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
  `,
  Count: styled.span`
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
  `,
  EmojiBox: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    padding-top: 1.6rem;
    margin-top: 1rem;
    width: 100%;
  `,
};

function CardItem({
  name,
  color,
  cardUrl,
  recentMessages,
  topReactions,
  messageCount,
}) {
  return (
    <Styled.Card color={color} $cardUrl={cardUrl}>
      <Styled.Container>
        <Styled.Info>
          <Styled.Name>To. {name}</Styled.Name>
          <AvatarList recentMessages={recentMessages} />
          <Styled.CountInfo>
            <Styled.Count>{messageCount}</Styled.Count>
            명이 작성했어요!
          </Styled.CountInfo>
        </Styled.Info>
        <Styled.EmojiBox>
          {topReactions.map((value) => (
            <EmojiBadge
              key={value.id}
              emoji={value.emoji}
              count={value.count}
            />
          ))}
        </Styled.EmojiBox>
      </Styled.Container>
    </Styled.Card>
  );
}
export default CardItem;
