import React, { useState } from 'react';
import ToggleButton from '@components/common/ToggleButton';

function Yj() {
  const [isToggled, setIsToggled] = useState(true);
  const [toggleValue, setToggleValue] = useState('컬러');

  const handleToggle = (value) => {
    setIsToggled(!isToggled);
    setToggleValue(value);
  };

  return (
    <div className="App">
      <ToggleButton
        isToggled={isToggled}
        onToggle={handleToggle}
      ></ToggleButton>
      <h2>{toggleValue}</h2>
    </div>
  );
}

export default Yj;
