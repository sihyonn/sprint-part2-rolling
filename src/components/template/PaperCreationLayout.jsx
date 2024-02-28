import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import routes from '@constants/routes';

const Styled = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 0 calc((100vw - 72rem) / 2); //콘텐츠 사이즈 720
    padding-top: ${({ $isCreatePage }) =>
      $isCreatePage ? '5.7rem' : '4.7rem'};

    @media (min-width: 768px) and (max-width: 1247px) {
      padding: 5rem 2.4rem 0;
    }
    @media (max-width: 767px) {
      padding: 5rem 2rem 0;
    }
  `,
};

function PaperCreationLayout({ children }) {
  const location = useLocation();
  const isCreatePage = location.pathname === routes.post;

  return (
    <Styled.Container $isCreatePage={isCreatePage}>
      <Outlet />
      {children}
    </Styled.Container>
  );
}

export default PaperCreationLayout;
