import React from 'react';
import { styled, useTheme } from 'styled-components';
import { Outlet, useParams } from 'react-router-dom';

import Header from '@components/header/Header';
import useGetRecipientsQuery from '@hooks/api/recipientsAPI/useGetRecipients';
import { API_RECIPIENTS } from '@constants/API';
import recipientsAPI from '@/api/recipientsAPI';
import { mapColorToTheme } from '@styles/commonStyle';

const Styled = {
  Container: styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 0 calc((100vw - 120rem) / 2);
    padding-top: 6.8rem;
    border-top: 1px solid #ededed;

    background-color: ${({ backgroundColor }) => backgroundColor};
    background-image: ${({ backgroundImageURL }) =>
      backgroundImageURL ? `url(${backgroundImageURL})` : 'none'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

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
  const theme = useTheme();
  const { id: user_id } = useParams();

  const { data } = useGetRecipientsQuery(
    API_RECIPIENTS.BY_ID(user_id),
    recipientsAPI.getRecipientDataById,
    user_id,
  );

  return (
    <>
      <Header data={data} />
      <Styled.Container
        backgroundColor={mapColorToTheme(data?.backgroundColor, theme)}
        backgroundImageURL={data?.backgroundImageURL}
      >
        <Styled.InnerWrap>
          <Outlet />
          {children}
        </Styled.InnerWrap>
      </Styled.Container>
    </>
  );
}

export default PaperLayout;
