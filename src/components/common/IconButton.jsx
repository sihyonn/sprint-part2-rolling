import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import check from '@/assets/check.svg';
import plus from '@/assets/plus.svg';

const Styled = {
  BackGround: styled.div`
    display: flex;
    padding: 1.6rem;
    border-radius: 100px;
    background: ${({ status, theme }) => {
      switch (status) {
        case 'Enabled':
          return theme.color.btnGr;
        case 'Disabled':
          return theme.color.mainGr;
        case 'Hover':
          return '#4A4A4A';
        case 'Pressed':
          return '#3A3A3A';
        case 'Focus':
          return '#3A3A3A';
        default:
          return theme.color.btnGr;
      }
    }};
    border: ${({ status }) => (status === 'Focus' ? '1px solid #2B2B2B' : '')};
  `,
};

function IconButton({ status, shape }) {
  const [buttonStatus, setButtonStatus] = useState('Enabled');
  const handleMouseEnter = () => setButtonStatus('Hover');
  const handleMouseLeave = () => setButtonStatus('Enabled');
  const handleMouseDown = () => setButtonStatus('Pressed');
  const handleFocus = () => setButtonStatus('Focus');
  const handleBlur = () => setButtonStatus('Enabled');

  const imagePath = shape === 'check' ? check : plus;

  const finalButtonStatus = status === 'Disabled' ? 'Disabled' : buttonStatus;

  return (
    <Styled.BackGround
      status={finalButtonStatus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <img src={imagePath} alt="IconButton" />
    </Styled.BackGround>
  );
}
export default IconButton;
