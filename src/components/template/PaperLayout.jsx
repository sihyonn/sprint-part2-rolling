import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from '@components/header/Header';

const Styled = {
  Container: styled.div`
    width: 100vw;
    padding: 0 calc((100vw - 120rem) / 2);
    padding-top: 6.8rem;
    border-top: 1px solid #ededed;
    background: #ffe2ad;

    @media (min-width: 768px) and (max-width: 1247px) {
      padding: 6.4rem 2.4rem 0;
    }
    @media (max-width: 767px) {
      padding: 12.8rem 2rem 0;
    }
  `,

  InnerWrap: styled.div`
    width: 100%;
    padding: 6.3rem 0 24.5rem;

    @media (min-width: 768px) and (max-width: 1247px) {
      padding: 9.3rem 0 13.5rem;
    }
    @media (max-width: 767px) {
      padding: 2.4rem 0 3.8rem;
    }
  `,
};

function PaperLayout({ children }) {
  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.InnerWrap>
          <Outlet />
          {children}
        </Styled.InnerWrap>
      </Styled.Container>
    </>
  );
}

export default PaperLayout;
