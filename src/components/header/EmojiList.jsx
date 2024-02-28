import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import EmojiCountList from '@components/common/EmojiCountList';
import EmojiExpand from './EmojiExpand';
import arrowdown from '@/assets/arrowdownIcon.svg';
const mockdata = {
  count: 3,
  next: null,
  previous: '',
  results: [
    {
      id: 34,
      emoji: '👍',
      count: 24,
    },
    {
      id: 28,
      emoji: '😍',
      count: 16,
    },
    {
      id: 26,
      emoji: '🎉',
      count: 10,
    },
  ],
};

const Styled = {
  Container: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.2rem;
  `,
  EmojiButton: styled.button`
    display: flex;
    position: relative;
    width: 3.6rem;
    height: 3.6rem;
    padding: 0.6rem;
    justify-content: center;
    align-items: center;
  `,
};
function EmojiList() {
  const [isClicked, setIsClicked] = useState(false);
  const buttonRef = useRef(null);
  const handleButtonClick = () => {
    setIsClicked((prev) => !prev);
  };
  useEffect(() => {
    if (!isClicked) return;
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsClicked(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isClicked]);
  return (
    <Styled.Container>
      <EmojiCountList data={mockdata} />
      <Styled.EmojiButton
        ref={buttonRef}
        onClick={handleButtonClick}
        type="button"
      >
        <img src={arrowdown} alt="arrowdownIcon" />
        {isClicked && <EmojiExpand />}
      </Styled.EmojiButton>
    </Styled.Container>
  );
}

export default EmojiList;
