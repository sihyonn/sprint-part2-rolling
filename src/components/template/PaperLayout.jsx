import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from '@components/header/Header';

const Styled = {
  Container: styled.div`
    // PC, Tablet, Mobile 별 gnb,header에 맞춰 위 싱크맞추고 양옆 반응형만 관여
    width: 100vw;
    min-height: 100vh;
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
    // PC, Tablet, Mobile별 헤더로부터 카드목록의 시작위치에 관여
    width: 100%;
    max-height: 100vh; //조정 필요해보임
    padding-top: 11.3rem;

    @media (min-width: 768px) and (max-width: 1247px) {
      padding-top: 9.3rem;
    }
    @media (max-width: 767px) {
      padding-top: 2.4rem;
    }
  `,
};

function PaperLayout({ children }) {
  return (
    <>
      <Header />
      <Styled.Container className="나레이아웃">
        <Styled.InnerWrap className="난 inner">
          <Outlet />
          {children}
        </Styled.InnerWrap>
      </Styled.Container>
    </>
  );
}

export default PaperLayout;
