import React from 'react';
import { styled } from 'styled-components';
import { Outlet, useParams } from 'react-router-dom';

import Header from '@components/header/Header';
import useGetRecipientsQuery from '@hooks/api/recipientsAPI/useGetRecipients';
import { API_RECIPIENTS } from '@constants/API';
import recipientsAPI from '@/api/recipientsAPI';

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
  const { id: user_id } = useParams();
  console.log(user_id);

  const { data } = useGetRecipientsQuery(
    API_RECIPIENTS.BY_ID(user_id),
    recipientsAPI.getRecipientDataById,
    user_id,
  );
  console.log(data);

  return (
    <>
      <Header data={data} user_id={user_id} />
      <Styled.Container
        backgroundColor={data?.backgroundColor}
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
