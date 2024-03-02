import React, { useRef } from 'react';
import styled from 'styled-components';

import useKakaoShare from '@hooks/useKakaoShare';
import useOutsideClick from '@hooks/useOutsideClick';
import { copyToClipboard } from '@utils/copyToClipBoard';

const Styled = {
  Shared: styled.div`
    position: absolute;
    top: 4.5rem;
    left: -5.8rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 1rem 0.1rem;
    border: ${({ theme }) => theme.border.gr1};
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.boxShadow.card};
    white-space: nowrap;

    @media (max-width: 767px) {
      left: -8rem;
    }
  `,
  SharedList: styled.div`
    width: 100%;
    padding: 1.2rem 1.6rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    color: #181818;
    line-height: 2.6rem;
    letter-spacing: -0.016rem;

    &:hover {
      background: ${({ theme }) => theme.color.lightGr};
    }
  `,
};

/**
 * SharedOption - 헤더의 공유버튼을 눌렀을 때 보이는 popover(카카오톡/url 공유)
 */

function SharedOption({ isChecked, setIsChecked }) {
  const optionRef = useRef();
  const shareUrl = window.location.href;

  useOutsideClick(optionRef, () => {
    if (isChecked) setIsChecked(false);
  });

  const { shareKakao } = useKakaoShare(shareUrl);

  return (
    <Styled.Shared ref={optionRef}>
      <Styled.SharedList onClick={shareKakao}>카카오톡 공유</Styled.SharedList>
      <Styled.SharedList
        onClick={() => {
          copyToClipboard(shareUrl);
        }}
      >
        URL 공유
      </Styled.SharedList>
    </Styled.Shared>
  );
}

export default SharedOption;
