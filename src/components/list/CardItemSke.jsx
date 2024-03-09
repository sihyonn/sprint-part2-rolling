import React from 'react';
import styled from 'styled-components';
import { Shimmer, skeletonStyle } from '@styles/commonStyle';

const Styled = {
  Card: styled.div`
    display: flex;
    position: relative;
    width: 27.5rem;
    height: 26rem;
    border-radius: 1.6rem;
    background-color: #fff;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 767px) {
      width: 20.8rem;
      height: 23.2rem;
    }
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  `,
  Name: styled.div`
    width: 17rem;
    height: 2.9rem;
    @media (max-width: 767px) {
      height: 1.9rem;
    }
    ${skeletonStyle}
  `,
  Container: styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4.3rem;
    @media (max-width: 767px) {
      gap: 3.3rem;
    }
    padding: 3rem 2.4rem 2rem;
    width: 100%;
    z-index: 1;
  `,
  Info: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: flex-start;
  `,
  CountInfo: styled.div`
    width: 12.5rem;
    height: 1.8rem;
    ${skeletonStyle}
    @media (max-width: 767px) {
      height: 1.4rem;
    }
  `,
  EmojiBox: styled.div`
    display: flex;
    width: 100%;
    /* align-items: flex-start; */
    gap: 0.8rem;
    padding-top: 1.6rem;
    margin-top: 1rem;
    @media (max-width: 767px) {
      margin-top: 0;
    }
    .emoji {
      ${skeletonStyle}
      width:6.6rem;
      height: 3.6rem;
      border-radius: 30px;
    }
  `,
  Empty: styled.div`
    width: 9rem;
    height: 2.4rem;
    ${skeletonStyle}
  `,
};

function CardItemSke() {
  return (
    <Styled.Card>
      <Styled.Container className="container">
        <Styled.Info>
          <Styled.Name>
            <Shimmer />
          </Styled.Name>
          <Styled.Empty>
            <Shimmer />
          </Styled.Empty>
          <Styled.CountInfo>
            <Shimmer />
          </Styled.CountInfo>
        </Styled.Info>
        <Styled.EmojiBox>
          <div className="emoji">
            <Shimmer />
          </div>
          <div className="emoji">
            <Shimmer />
          </div>
          <div className="emoji">
            <Shimmer />
          </div>
        </Styled.EmojiBox>
      </Styled.Container>
    </Styled.Card>
  );
}
export default CardItemSke;
