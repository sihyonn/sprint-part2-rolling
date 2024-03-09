import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import IconButton from '@/components/common/button/IconButton';
import routes from '@constants/routes';

const Styled = {
  CardContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 28rem;
    padding: 2.8rem 2.4rem 2.4rem;

    border-radius: 1.6rem;
    background: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.boxShadow.card};
  `,
};

function AddCard({ recipientId }) {
  const navigate = useNavigate();

  return (
    <Styled.CardContainer>
      <IconButton
        onClick={() => {
          navigate(`${routes.post}/${recipientId}/message`);
        }}
        shape="plus"
      />
    </Styled.CardContainer>
  );
}

export default AddCard;
