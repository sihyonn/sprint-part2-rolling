import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@/components/common/button/Button';
import PageTitle from '@components/common/PageTitle';

import useMobile from '@hooks/useMobile';
import pcCard from '@/assets/pcCard.svg';
import mobileCard from '@/assets/mobileCard.svg';
import EmojiExample from '@/assets/EmojiExample.svg';

const Styled = {
  Landing: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  `,
  Point1Container: styled.div`
    display: flex;
    padding: 6rem 0 6rem 6rem;
    justify-content: center;
    align-items: flex-start;
    gap: 15.2rem;
    border-radius: 1.6rem;
    background: ${({ theme }) => theme.color.surface};
    @media (min-width: 768px) and (max-width: 1248px) {
      width: 100%;
      height: 44rem;
      padding: 4rem 4rem 4rem 4rem;
      flex-direction: column;
      gap: 3.3rem;
    }
    @media (max-width: 767px) {
      width: 100%;
      height: 35.2rem;
      padding: 2.4rem 2.4rem 6.23rem 2.4rem;
      flex-direction: column;
      gap: 5rem;
      overflow: hidden;
    }
  `,
  PointContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.6rem;
    @media (min-width: 768px) and (max-width: 1248px) {
      order: 1;
    }
    @media (max-width: 767px) {
      width: 27.2rem;
      height: 12.6rem;
      order: 1;
    }
  `,
  Point: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem 1.2rem;
    border-radius: 5rem;
    background: ${({ theme }) => theme.color.mainPu};
    color: ${({ theme }) => theme.color.white};
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: -0.007rem;
    @media (max-width: 767px) {
      padding: 0.4rem 1.2rem;
    }
  `,
  InfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    @media (max-width: 767px) {
      gap: 0.4rem;
    }
  `,
  Info: styled.span`
    color: #181818;
    font-family: Pretendard;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.6rem;
    letter-spacing: -0.024rem;
    @media (max-width: 767px) {
      font-size: 1.8rem;
      line-height: 2.8rem;
      letter-spacing: -0.018rem;
      word-break: auto-phrase;
    }
  `,
  SubInfo: styled.span`
    color: ${({ theme }) => theme.color.btnGr};
    font-family: Pretendard;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.8rem;
    letter-spacing: -0.018rem;
    @media (max-width: 767px) {
      font-size: 1.5rem;
      line-height: 2.2rem;
      letter-spacing: -0.015rem;
    }
  `,
  Point2Container: styled.div`
    display: flex;
    padding: 6rem 19.2rem 6rem 0;
    justify-content: center;
    align-items: flex-start;
    gap: 0;
    border-radius: 1.6rem;
    background: ${({ theme }) => theme.color.surface};
    @media (min-width: 768px) and (max-width: 1248px) {
      width: 100%;
      height: 44rem;
      padding: 4rem 4rem 4rem 4rem;
      flex-direction: column;
      gap: 3.3rem;
    }
    @media (max-width: 767px) {
      width: 100%;
      height: 35.2rem;
      padding: 2.4rem 2.4rem 6.23rem 2.4rem;
      flex-direction: column;
      gap: 5rem;
      overflow: hidden;
    }
  `,
  CardContainer: styled.div`
    display: flex;
    width: 72rem;
    height: 20.4rem;
    padding: 2.1rem 4rem 2.1rem 0rem;
    justify-content: center;
    align-items: center;
    gap: 1.18rem;
    @media (min-width: 768px) and (max-width: 1248px) {
      padding: 0;
      order: 2;
      width: 100%;
    }
    @media (max-width: 767px) {
      width: 100%;
      padding: 0;
      order: 2;
      margin-bottom: -1.3rem;
    }
  `,
  EmojiContainer: styled.div`
    display: flex;
    width: 72rem;
    height: 20.4rem;
    padding: 0;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) and (max-width: 1248px) {
      order: 2;
      padding: 0;
      width: 100%;
    }
    @media (max-width: 767px) {
      order: 2;
      width: 100%;
      padding: 0;
      img {
        width: 32rem;
        height: 11.3rem;
        margin-bottom: -2rem;
      }
    }
  `,
  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 28rem;
    height: 10.4rem;
    padding: 2.4rem 0rem;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) and (max-width: 1248px) {
      width: 100%;
    }
    @media (max-width: 767px) {
      width: 100%;
    }
  `,
};
function MainPage() {
  const isMobile = useMobile();
  const navigate = useNavigate();
  return (
    <>
      <PageTitle title="" />
      <Styled.Landing>
        <Styled.Point1Container>
          <Styled.PointContainer>
            <Styled.Point>Point. 01</Styled.Point>
            <Styled.InfoContainer>
              <Styled.Info>
                누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요
              </Styled.Info>
              <Styled.SubInfo>로그인 없이 자유롭게 만들어요.</Styled.SubInfo>
            </Styled.InfoContainer>
          </Styled.PointContainer>
          <Styled.CardContainer>
            <img src={isMobile ? mobileCard : pcCard} alt="cardexample" />
          </Styled.CardContainer>
        </Styled.Point1Container>
        <Styled.Point2Container>
          <Styled.EmojiContainer>
            <img src={EmojiExample} alt="emojiexample" />
          </Styled.EmojiContainer>
          <Styled.PointContainer>
            <Styled.Point>Point. 02</Styled.Point>
            <Styled.InfoContainer>
              <Styled.Info>서로에게 이모지로 감정을 표현해보세요</Styled.Info>
              <Styled.SubInfo>
                롤링 페이퍼에 이모지를 추가할 수 있어요.
              </Styled.SubInfo>
            </Styled.InfoContainer>
          </Styled.PointContainer>
        </Styled.Point2Container>
        <Styled.ButtonContainer>
          <Button
            size="L"
            style={{
              width: '100%',
              maxWidth: '128rem',
            }}
            onClick={() => navigate('/list')}
          >
            구경해보기
          </Button>
        </Styled.ButtonContainer>
      </Styled.Landing>
    </>
  );
}

export default MainPage;
