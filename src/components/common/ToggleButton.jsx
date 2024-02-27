import React from 'react';
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
    display: flex;
    padding: 0.8rem 1.6rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.6rem;
    border: 2px solid
      ${({ isToggled, theme }) =>
        isToggled ? theme.color.mainPu : `transparent`};
    background: ${({ isToggled, theme }) =>
      isToggled ? theme.color.white : theme.color.lightGr};

    color: ${({ isToggled, theme }) =>
      isToggled ? theme.color.hoverPu : `#181818`};
    text-align: center;
    cursor: pointer;
    &:hover {
      background: ${({ isToggled, theme }) =>
        isToggled ? theme.color.lightPu1 : theme.color.mainGr};
    }
  `,
  ToggleText: styled.span`
    width: 9rem;
    font-size: 1.6rem;
    font-style: normal;

    line-height: 2.6rem; /* 162.5% */
    font-weight: ${({ isToggled }) => (isToggled ? `700` : `400`)};
  `,
};

const ToggleButton = ({ isToggled = true, onToggle }) => {
  return (
    <Styled.ToggleContainer>
      <Styled.Toggle isToggled={isToggled} onClick={onToggle}>
        <Styled.ToggleText isToggled={isToggled}>컬러</Styled.ToggleText>
      </Styled.Toggle>
      <Styled.Toggle isToggled={!isToggled} onClick={onToggle}>
        <Styled.ToggleText isToggled={!isToggled}>이미지</Styled.ToggleText>
      </Styled.Toggle>
    </Styled.ToggleContainer>
  );
};

export default ToggleButton;
