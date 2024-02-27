import React from 'react';
import { toast } from 'react-hot-toast';
import styled from 'styled-components';
import completed from '@/assets/completedIcon.svg';
import close from '@/assets/closeIcon.svg';

const Styled = {
  ToastContainer: styled.div`
    display: flex;
    position: fixed;
    bottom: 5rem;
    width: 52.4rem;
    height: 6.4rem;
    z-index: 2;
    padding: 1.9rem 3rem;
    justify-content: center;
    align-items: flex-start;
    gap: 25.3rem;
    border-radius: 0.8rem;
    background: rgba(0, 0, 0, 0.8);
    @media (max-width: 560px) {
      width: 32rem;
      height: 6.4rem;
      gap: 4.9rem;
    }
  `,
  MessageContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    span {
      color: ${({ theme }) => theme.color.white};
      font-family: Pretendard;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.6rem;
      letter-spacing: -0.016rem;
    }
  `,
  CloseButton: styled.button`
    cursor: 'pointer';
    background: 'none';
    border: 'none';
  `,
};
function CustomToast({ id, message }) {
  const handleClose = () => {
    toast.remove(id);
    console.log(id);
  };
  return (
    <Styled.ToastContainer>
      <Styled.MessageContainer>
        <img src={completed} alt="completedIcon" />
        <span>{message}</span>
      </Styled.MessageContainer>
      <Styled.CloseButton type="button" onClick={handleClose}>
        <img src={close} alt="closedIcon" />
      </Styled.CloseButton>
    </Styled.ToastContainer>
  );
}

export const showToast = (message) => {
  toast.custom((t) => <CustomToast id={t.id} message={message} />, {
    duration: 5000,
    position: 'bottom-center',
  });
};
