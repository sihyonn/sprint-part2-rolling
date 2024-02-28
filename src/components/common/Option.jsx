import React, { useState } from 'react';
import styled from 'styled-components';
import CardSample from '@/components/common/CardSample';
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
};

function Option() {
  const [checkStatus, setCheckStatus] = useState(initialState);

  const handleCardCheck = (color) => {
    setCheckStatus(() => ({
      ...initialState,
      [color]: true,
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
          <CardSample
            key={card.key}
            usage="option"
            color={card.color}
            onClick={() => handleCardCheck(card.color)}
            isChecked={checkStatus[card.color]}
          />
        ))}
      </Styled.Container>
    </Styled.Background>
  );
}
export default Option;
