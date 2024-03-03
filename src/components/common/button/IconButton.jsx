import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { BUTTON_STATUS } from '@/constants/BUTTON_STATUS';
import check from '@/assets/checkIcon.svg';
import plus from '@/assets/plusIcon.svg';

const Styled = {
  BackGround: styled.div`
    display: flex;
    padding: 1.6rem;
    border-radius: 100px;
    background: ${({ $status, theme }) => {
      switch ($status) {
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
    border: ${({ $status }) =>
      $status === 'Focus' ? '1px solid #2B2B2B' : ''};
  `,
};

function IconButton({ status, shape, onClick }) {
  const [buttonStatus, setButtonStatus] = useState('Enabled');

  const handleButtonStateChange = (newStatus) => {
    setButtonStatus(newStatus);
  };

  const imagePath = shape === 'check' ? check : plus;

  const finalButtonStatus = status === 'Disabled' ? 'Disabled' : buttonStatus;

  return (
    <Styled.BackGround
      type="button"
      $status={finalButtonStatus}
      onMouseEnter={() => handleButtonStateChange(BUTTON_STATUS.HOVER)}
      onMouseLeave={() => handleButtonStateChange(BUTTON_STATUS.ENABLED)}
      onMouseDown={() => handleButtonStateChange(BUTTON_STATUS.PRESSED)}
      onFocus={() => handleButtonStateChange(BUTTON_STATUS.FOCUS)}
      onBlur={() => handleButtonStateChange(BUTTON_STATUS.ENABLED)}
      onClick={onClick}
    >
      <img src={imagePath} alt="IconButton" />
    </Styled.BackGround>
  );
}
export default IconButton;
