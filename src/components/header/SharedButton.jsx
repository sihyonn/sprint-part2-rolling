import React from 'react';
import { useState, useEffect, useRef } from 'react';
import SharedOption from '@/components/header/SharedOption';
import OutlinedButton from '@components/common/button/OutlinedButton';

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
      <OutlinedButton
        ref={buttonRef}
        onClick={handleButtonClick}
        iconType={'share'}
      >
        {isChecked && <SharedOption />}
      </OutlinedButton>
    </>
  );
}

export default SharedButton;
