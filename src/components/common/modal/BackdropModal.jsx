import React, { useRef } from 'react';
import { keyframes, styled } from 'styled-components';

import Portal from '@/components/common/modal/Portal';

import useOutsideClick from '@hooks/useOutsideClick';
import useBodyStyleFixed from '@hooks/useBodyStyleFixed';

const Keyframes = {
  appear: keyframes`
  0% {
      opacity: 0;
      transform: translateY(100vh) scale(0);
    }
  100% {
    opacity: 1;
    
    transform: translateY(0) scale(1);
  }
`,
};

const Styled = {
  Backdrop: styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);

    position: fixed;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  `,

  Container: styled.section`
    position: relative;

    min-width: 60rem;
    min-height: 47.6rem;
    padding: 4rem;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.boxShadow.card};

    animation: ${Keyframes.appear} 0.3s 1;
  `,
};

/**
 * BackdropModal - 배경이 반투명인 모달창
 * @param {React.Dispatch.SetStateAction} setOpen 모달창 열림 상태 변경하는 set 함수
 * @param {object} modalStyle 모달창 스타일링
 * @param {React.ReactNode} children 모달창 내부 컴포넌트 및 엘리먼트
 */

function BackdropModal({ setOpen, modalStyle, children }) {
  const modalRef = useRef();
  useBodyStyleFixed();

  useOutsideClick(modalRef, () => {
    closeModal();
  });

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Portal>
      <Styled.Backdrop>
        <Styled.Container ref={modalRef} style={modalStyle}>
          {children}
        </Styled.Container>
      </Styled.Backdrop>
    </Portal>
  );
}

export default BackdropModal;
