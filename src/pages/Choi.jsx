import React from 'react';

import styled from 'styled-components';
import Header from '@components/header/Header';
import Gnb from '@components/common/Gnb';
import CardSample from '@components/common/CardSample';

const Con = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;

const Main = styled.div`
  background: #ffe2ad;
  width: 100%;
  height: 1000px;
  margin: 0;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Bar = styled.div`
  width: 100%;
  height: 0.1rem;
  background: #ededed;
`;

function Choi() {
  return (
    <>
      <Con>
        <Gnb />
        <Bar />
        <Header />
      </Con>
      <Main>
        <CardSample color="green" />
      </Main>
    </>
  );
}

export default Choi;
