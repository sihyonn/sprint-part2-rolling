import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { showToast } from '@components/common/Toast';
const Styled = {
  Shared: styled.div`
    display: flex;
    position: absolute;
    top: 4.5rem;
    left: -5.8rem;
    padding: 1rem 0.1rem;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 0.8rem;
    white-space: nowrap;
    border: ${({ theme }) => theme.border.gr1};
    background: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.boxShadow.card};

    @media (max-width: 767px) {
      left: -8rem;
    }
  `,
  SharedList: styled.div`
    display: flex;
    width: 100%;
    padding: 1.2rem 1.6rem;
    align-items: center;
    gap: 1rem;
    color: #181818;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.6rem;
    letter-spacing: -0.016rem;
    &:hover {
      background: ${({ theme }) => theme.color.lightGr};
    }
  `,
};
const { Kakao } = window;
function SharedOption() {
  const shareUrl = `${window.location.origin}`;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'text',
      text: '세상에 모든 정보를 쉽게 저장하고 관리해보세요',
      link: {
        mobileWebUrl: 'shareUrl',
        webUrl: 'shareUrl',
      },
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        showToast('URL이 복사 되었습니다.');
      })
      .catch((err) => {
        console.error('클립보드 복사에 실패했습니다.', err);
        showToast('클립보드 복사에 실패했습니다.');
      });
  };
  return (
    <Styled.Shared>
      <Styled.SharedList onClick={shareKakao}>카카오톡 공유</Styled.SharedList>
      <Styled.SharedList onClick={copyToClipboard}>URL 공유</Styled.SharedList>
    </Styled.Shared>
  );
}

export default SharedOption;
