import React from 'react';
import EmojiShare from '@components/header/EmojiShare';
import styled from 'styled-components';

const Con = styled.div`
  position: relative;
  margin: 300px auto;
  align-items: center;
  justify-content: center;
  display: flex;
`;

function Choi() {
  return (
    <Con>
      <EmojiShare />
    </Con>
  );
}

export default Choi;
