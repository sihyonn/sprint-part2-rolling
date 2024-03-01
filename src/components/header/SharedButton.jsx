import React from 'react';
import { useState } from 'react';

import SharedOption from '@/components/header/SharedOption';
import OutlinedButton from '@components/common/button/OutlinedButton';

function SharedButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      <OutlinedButton onClick={handleButtonClick} iconType={'share'}>
        {isChecked && (
          <SharedOption isChecked={isChecked} setIsChecked={setIsChecked} />
        )}
      </OutlinedButton>
    </>
  );
}

export default SharedButton;
