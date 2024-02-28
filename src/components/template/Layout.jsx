import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Gnb from '@components/common/Gnb';

const Styled = {
  Container: styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.white};
    padding-top: 6.6rem;
  `,
};

function Layout({ children }) {
  return (
    <>
      <Gnb />
      <Styled.Container>
        <Outlet />
        {children}
      </Styled.Container>
    </>
  );
}

export default Layout;
