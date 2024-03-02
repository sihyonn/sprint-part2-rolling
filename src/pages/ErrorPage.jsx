import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Styled = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    padding-top: 14rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    .message {
      font-size: 1.8rem;
    }
  `,

  Error: styled.div`
    padding-bottom: 2rem;
    font-size: 5rem;
    font-weight: 600;
  `,

  GoBack: styled.button`
    padding-top: 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.mainPu};

    &:hover {
      color: #bf88f7;
    }
  `,
};

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <Styled.Error>ERROR!</Styled.Error>
      <div className="message">요청하신 페이지를 찾을 수 없습니다...🥹</div>
      <Styled.GoBack
        onClick={() => {
          navigate(-1, {});
        }}
      >
        이전 페이지로 돌아가기
      </Styled.GoBack>
    </Styled.Container>
  );
}

export default ErrorPage;
