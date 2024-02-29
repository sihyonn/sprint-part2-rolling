import React from 'react';

import styled from 'styled-components';
import Header from '@components/header/Header';
import CardSample from '@components/common/CardSample';

const Main = styled.div`
  background: #ffe2ad;
  width: 100%;
  height: 1000px;
  margin: 0;
  align-items: center;
  justify-content: center;
  display: flex;
`;

function Choi() {
  return (
    <>
      <Header />
      <Main>
        <CardSample color="green" />
      </Main>
    </>
  );
}

export default Choi;
