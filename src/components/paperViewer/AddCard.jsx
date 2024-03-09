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
    cursor: pointer;
  `,
};

/**
 * AddCard - 클릭 시 메시지 생성창으로 넘어가는 플러스 모양 아이콘을 가진 카드 컴포넌트
 * @param {string} recipientId 대상의 아이디
 */

function AddCard({ recipientId }) {
  const navigate = useNavigate();

  return (
    <Styled.CardContainer>
      <IconButton
        shape="plus"
        onClick={() => {
          navigate(`${routes.post}/${recipientId}/message`);
        }}
      />
    </Styled.CardContainer>
  );
}

export default AddCard;
