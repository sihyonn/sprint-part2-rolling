import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import EmojiBadge from '@components/common/badge/EmojiBadge';
import AvatarList from './AvatarList';
import purplePattern from '@/assets/purple.svg';
import greenPattern from '@/assets/green.svg';
import bluePattern from '@/assets/blue.svg';
import beigePattern from '@/assets/beige.svg';

const Styled = {
  Card: styled.div`
    display: flex;
    position: relative;
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
    color: ${({ $cardUrl }) => ($cardUrl ? '#fff' : '#181818')};
    font-family: Pretendard;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.6rem; /* 150% */
    letter-spacing: -0.024rem;
    white-space: normal;
    max-width: 17rem;
  `,
  Container: styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ $name }) => ($name.length > 6 ? '0.7rem' : '4.3rem')};
    padding: 3rem 2.4rem 2rem;
    width: 100%;
    z-index: 1;
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
    color: ${({ $cardUrl }) => ($cardUrl ? '#fff' : '#181818')};
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
  Empty: styled.div`
    width: 100%;
    height: 2.4rem;
  `,
  ColorImg: styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
  `,
};

function CardItem({
  id,
  name,
  color,
  cardUrl,
  recentMessages,
  topReactions,
  messageCount,
}) {
  const [pattern, setPattern] = useState(null);
  const navigate = useNavigate();
  const goToPostPage = () => {
    navigate(`/post/${id}`);
  };
  useEffect(() => {
    if (color === 'beige') {
      setPattern(beigePattern);
    } else if (color === 'purple') {
      setPattern(purplePattern);
    } else if (color === 'blue') {
      setPattern(bluePattern);
    } else if (color === 'green') {
      setPattern(greenPattern);
    }
  }, [color]);
  return (
    <Styled.Card onClick={goToPostPage} color={color} $cardUrl={cardUrl}>
      <Styled.Container $name={name}>
        <Styled.Info $messageCount={messageCount}>
          <Styled.Name $cardUrl={cardUrl}>To. {name}</Styled.Name>
          {messageCount != 0 ? (
            <AvatarList
              className="AvatarList"
              recentMessages={recentMessages}
              messageCount={messageCount}
            />
          ) : (
            <Styled.Empty />
          )}
          <Styled.CountInfo $cardUrl={cardUrl}>
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
      {cardUrl == null && <Styled.ColorImg src={pattern} alt="카드 무늬" />}
    </Styled.Card>
  );
}
export default CardItem;
