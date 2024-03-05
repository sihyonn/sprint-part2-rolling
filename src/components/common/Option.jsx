import React, { useState } from 'react';
import styled from 'styled-components';
import CardSample from '@/components/common/CardSample';

const initialState = {
  beige: false,
  purple: false,
  blue: false,
  green: false,
};
const initialImgState = {
  0: false,
  1: false,
  2: false,
  3: false,
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
    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `,
};

function Option({ background, backgroundImages, onSelect }) {
  const [checkStatus, setCheckStatus] = useState({
    ...initialState,
    beige: true,
  });
  const [checkImg, setCheckImg] = useState({ ...initialImgState, 0: true });

  const handleCardCheck = (color) => {
    setCheckStatus(() => ({
      ...initialState,
      [color]: true,
    }));
    onSelect('color', color);
  };

  const handleImgCheck = (img) => {
    const imgIndex = backgroundImages['imageUrls'].indexOf(img);
    setCheckImg(() => ({
      ...initialImgState,
      [imgIndex]: true,
    }));
    onSelect('img', img);
  };

  const cards = [
    { key: 'beige', color: 'beige' },
    { key: 'purple', color: 'purple' },
    { key: 'blue', color: 'blue' },
    { key: 'green', color: 'green' },
  ];

  return (
    <Styled.Background>
      <Styled.Container>
        {background === 'color'
          ? cards.map((card) => (
              <CardSample
                key={card.key}
                usage="option"
                color={card.color}
                onClick={() => handleCardCheck(card.color)}
                isChecked={checkStatus[card.color]}
              />
            ))
          : backgroundImages['imageUrls'].map((img, idx) => (
              <CardSample
                key={idx}
                usage="option"
                cardUrl={img}
                onClick={() => handleImgCheck(img)}
                isChecked={checkImg[idx]}
              />
            ))}
      </Styled.Container>
    </Styled.Background>
  );
}
export default Option;
