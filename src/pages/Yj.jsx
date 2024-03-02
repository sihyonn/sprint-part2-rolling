import React, { useState } from 'react';
import ToggleButton from '@components/common/button/ToggleButton';

function Yj() {
  const [toggleValue, setToggleValue] = useState('컬러');

  const handleToggle = (value) => {
    setToggleValue(value);
  };

  return (
    <div className="App">
      <ToggleButton onToggle={handleToggle}></ToggleButton>
      <h2>{toggleValue}</h2>
    </div>
  );
}

export default Yj;
