import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import Gnb from '@components/common/Gnb';
import useMobile from '@hooks/useMobile';

const Styled = {
  Container: styled.div`
    width: 100vw;
    background-color: ${({ theme }) => theme.color.white};
    padding-top: 6.6rem;

    @media (max-width: 767px) {
      padding-top: ${({ $invisibelGnb }) => ($invisibelGnb ? '0' : '6.6rem')};
    }
  `,
};

function Layout({ children }) {
  const location = useLocation();
  const { pathname } = location;
  const isMobile = useMobile();

  const invisibelGnb = pathname !== '/' && pathname !== '/list' && isMobile;

  return (
    <>
      {!invisibelGnb && <Gnb />}
      <Styled.Container $invisibelGnb={invisibelGnb}>
        <Outlet />
        {children}
      </Styled.Container>
    </>
  );
}

export default Layout;
