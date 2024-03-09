import React from 'react';
import { styled } from 'styled-components';
import useScrollToTop from '@hooks/useScrollToTop';
import ArrowTopIcon from '@/assets/icon/ArrowTopIcon';

const Styled = {
  TopButton: styled.button`
    width: 5rem;
    height: 5rem;
    border: 1px solid ${({ theme }) => theme.color.lightPu1};
    border-radius: 999rem;
    background-color: ${({ theme }) => theme.color.white};

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 3rem;
    right: 9rem;

    @media (max-width: 1247px) {
      bottom: 9rem;
      right: 2.5rem;
    }
  `,
};

function TopButton() {
  const showButton = useScrollToTop();

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <Styled.TopButton type="button" onClick={scrollToTop}>
          <ArrowTopIcon />
        </Styled.TopButton>
      )}
    </>
  );
}

export default TopButton;
