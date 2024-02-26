import React, { useState } from 'react';
import ToggleButton from '@components/common/ToggleButton';

function Yj() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="App">
      <ToggleButton
        isToggled={isToggled}
        onToggle={handleToggle}
      ></ToggleButton>
    </div>
  );
}

export default Yj;
