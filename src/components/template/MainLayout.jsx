import React from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import routes from '@constants/routes';

const Styled = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 0 calc((100vw - 120rem) / 2); //콘텐츠 사이즈 1200

    @media (max-width: 1247px) {
      padding: 5rem 2.4rem;
    }
  `,
};

/**
 * MainLayout - 메인, 페이퍼리스트 페이지에 사용되는 레이아웃
 */
function MainLayout({ children }) {
  const location = useLocation();
  const isListPage = location.pathname === routes.list;

  const calPadding = () => {
    return isListPage ? '5rem' : '6rem';
  };

  return (
    <Styled.Container style={{ paddingTop: calPadding() }}>
      {children}
    </Styled.Container>
  );
}

export default MainLayout;
