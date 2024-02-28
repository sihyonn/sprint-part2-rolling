import React from 'react';
import styled from 'styled-components';
import IconButton from '@/components/common/button/IconButton';

const Styled = {
  Card: styled.div`
    display: flex;
    width: ${({ usage }) => (usage == 'option' ? '16.8rem' : '27.5rem')};
    height: ${({ usage }) => (usage == 'option' ? '16.8rem' : '26rem')};
    border-radius: 1.6rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: ${({ color, theme, cardUrl }) =>
      cardUrl
        ? `url(${cardUrl}) center/cover`
        : (() => {
            switch (color) {
              case 'orange':
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
  `,
};

function CardSample({
  key,
  usage = 'option',
  color,
  isChecked,
  onClick,
  cardUrl,
}) {
  return (
    <Styled.Card
      key={key}
      usage={usage}
      color={color}
      onClick={onClick}
      cardUrl={cardUrl}
      isChecked={isChecked}
    >
      {isChecked && <IconButton shape="check" />}
    </Styled.Card>
  );
}
export default CardSample;
