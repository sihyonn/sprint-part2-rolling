import React from 'react';
import styled from 'styled-components';

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
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media (max-width: 767px) {
      width: 20.8rem;
      height: 23.2rem;
    }
  `,
};

function CardItem({
  name,
  color,
  cardUrl,
  count,
  recentMessages,
  topReactions,
}) {
  console.log(name, color, cardUrl, count, recentMessages, topReactions);
  return <Styled.Card color={color} $cardUrl={cardUrl}></Styled.Card>;
}
export default CardItem;
