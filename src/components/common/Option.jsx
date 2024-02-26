import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';
const initialState = {
  orange: false,
  purple: false,
  blue: false,
  green: false,
};

const Styled = {
  Background: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Container: styled.div`
    display: grid;
    align-items: flex-start;
    gap: 1.6rem;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `,
  Card: styled.div`
    display: flex;
    width: 16.8rem;
    height: 16.8rem;
    border-radius: 1.6rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: ${({ color, theme }) => {
      switch (color) {
        case 'orange':
          return theme.color.lightOr2;
        case 'purple':
          return theme.color.lightPu2;
        case 'blue':
          return theme.color.lightBl2;
        case 'green':
          return theme.color.lightGn2;
      }
    }};
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `,
};

function Option() {
  const [checkStatus, setCheckStatus] = useState(initialState);

  const handleCardCheck = (color) => {
    setCheckStatus((prev) => ({
      prev: initialState,
      [color]: !prev[color],
    }));
  };

  const cards = [
    { key: 'orange', color: 'orange' },
    { key: 'purple', color: 'purple' },
    { key: 'blue', color: 'blue' },
    { key: 'green', color: 'green' },
  ];

  return (
    <Styled.Background>
      <Styled.Container>
        {cards.map((card) => (
          <Styled.Card
            key={card.key}
            color={card.color}
            onClick={() => handleCardCheck(card.color)}
          >
            {checkStatus[card.color] && <IconButton shape="check" />}
          </Styled.Card>
        ))}
      </Styled.Container>
    </Styled.Background>
  );
}
export default Option;
