import React from 'react';
import styled from 'styled-components';
import CircleIconButton from '@/components/common/button/CircleIconButton';

const Styled = {
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

function CardSample({ key, color, isChecked, onClick }) {
  return (
    <Styled.Card key={key} color={color} onClick={onClick}>
      {isChecked && <CircleIconButton shape="check" />}
    </Styled.Card>
  );
}
export default CardSample;
