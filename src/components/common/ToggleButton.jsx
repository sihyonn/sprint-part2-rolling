import React, { useState } from 'react';
import styled from 'styled-components';

const Styled = {
  ToggleContainer: styled.div`
    width: 24.4rem;
    height: 4rem;
    display: flex;
    border-radius: 0.6rem;
    background: ${({ theme }) => theme.color.lightGr};
  `,
  Toggle: styled.div`
    width: 12.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1.6rem;
    border-radius: 0.6rem;
    border: 2px solid
      ${({ $isToggled, theme }) =>
        $isToggled ? theme.color.mainPu : `transparent`};
    background: ${({ $isToggled, theme }) =>
      $isToggled ? theme.color.white : theme.color.lightGr};

    font-size: 1.6rem;
    font-style: normal;
    line-height: 2.6rem; /* 162.5% */
    font-weight: ${({ $isToggled }) => ($isToggled ? `700` : `400`)};
    color: ${({ $isToggled, theme }) =>
      $isToggled ? theme.color.hoverPu : `#181818`};
    text-align: center;

    cursor: pointer;
  `,
};

const ToggleButton = ({ className, onToggle }) => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = (value) => {
    setIsToggled(!isToggled);
    onToggle(value);
  };

  return (
    <Styled.ToggleContainer className={className}>
      <Styled.Toggle
        $isToggled={isToggled}
        onClick={() => handleToggle('컬러')}
      >
        컬러
      </Styled.Toggle>
      <Styled.Toggle
        $isToggled={!isToggled}
        onClick={() => handleToggle('이미지')}
      >
        이미지
      </Styled.Toggle>
    </Styled.ToggleContainer>
  );
};

export default ToggleButton;
