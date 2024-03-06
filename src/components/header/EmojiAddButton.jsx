import React from 'react';
import { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';
import OutlinedButton from '@components/common/button/OutlinedButton';
import usePostRecipient from '@hooks/api/recipientsAPI/usePostRecipient';

const Styled = {
  Container: styled.div`
    position: relative; // postion:absolute용도
    @media (max-width: 767px) {
      .add-emoji-btn {
        span {
          display: none;
        }
      }
    }
  `,
  EmojiPickerContainer: styled.div`
    position: absolute;
    top: 4.8rem;
    left: -27rem;
    z-index: 10;
  `,
  StyledEmojiPicker: styled(EmojiPicker)`
    width: 28.606rem;
    height: 36.8126rem;
  `,
};

function EmojiAddButton({ id }) {
  //id는 post용
  const [isClicked, setIsClicked] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const buttonRef = useRef(null);
  const emojiPickerRef = useRef(null);

  const handleButtonClick = () => {
    setIsClicked((prev) => !prev);
  };

  const { mutate: postReaction } = usePostRecipient();

  const onEmojiClick = (emoji) => {
    setSelectedEmoji(emoji?.emoji);
    postReaction({
      recipientId: id,
      recipientData: { emoji: emoji?.emoji, type: 'increase' },
    });
  };

  useEffect(() => {
    if (!isClicked) return;
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsClicked(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isClicked, selectedEmoji]);
  return (
    <Styled.Container>
      <OutlinedButton
        ref={buttonRef}
        onClick={handleButtonClick}
        iconType={'add'}
        className="add-emoji-btn"
      >
        <span>추가</span>
      </OutlinedButton>
      {isClicked && (
        <Styled.EmojiPickerContainer ref={emojiPickerRef}>
          <Styled.StyledEmojiPicker onEmojiClick={onEmojiClick} />
        </Styled.EmojiPickerContainer>
      )}
    </Styled.Container>
  );
}

export default EmojiAddButton;
