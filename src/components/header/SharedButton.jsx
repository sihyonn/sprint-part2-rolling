import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SharedOption from '@/components/header/SharedOption';
import share from '@/assets/shareIcon.svg';

const Styled = {
  Button: styled.button`
    display: flex;
    position: relative;
    width: 5.6rem;
    height: 3.6rem;
    padding: 1.3rem 0;
    align-items: center;
    background: ${({ theme }) => theme.color.white};
    border-radius: 0.6rem;
    border: ${({ theme }) => theme.border.gr1};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img: {
      width: 2.4rem;
      height: 2.4rem;
    }
  `,
};

function SharedButton() {
  const [isChecked, setIsChecked] = useState(false);
  const buttonRef = useRef(null);
  const handleButtonClick = () => {
    setIsChecked((prev) => !prev);
  };
  useEffect(() => {
    if (!isChecked) return;
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsChecked(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isChecked]);
  return (
    <>
      <Styled.Button ref={buttonRef} type="button" onClick={handleButtonClick}>
        <img src={share} alt="shareIcon" />
        {isChecked && <SharedOption />}
      </Styled.Button>
    </>
  );
}

export default SharedButton;
