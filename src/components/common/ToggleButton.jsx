import React from 'react';
import styled from 'styled-components';

const Styled = {
  ToggleContainer: styled.div`
    width: 15.25rem;
    height: 2.5rem;
    display: flex;
    border-radius: 0.375rem;
    background: ${({ theme }) => theme.color.lightGr};
  `,
  Toggle: styled.div`
    display: flex;
    padding: 0.4375rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem;
    border: 2px solid
      ${({ isToggled }) =>
        isToggled ? `var(--Purple-600, #9935ff)` : `transparent`};
    background: ${({ isToggled, theme }) =>
      isToggled ? `var(--white, #fff)` : theme.color.lightGr};

    color: ${({ isToggled }) =>
      isToggled ? `var(--Purple-700, #861dee)` : `var(--gray-900, #181818)`};
    text-align: center;
    cursor: pointer;
  `,
  ToggleText: styled.span`
    width: 5.625rem;
    font-size: 1rem;
    font-style: normal;
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
