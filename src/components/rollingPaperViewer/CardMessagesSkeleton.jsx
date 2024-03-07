import { Shimmer, skeletonStyle } from '@styles/commonStyle';
import React from 'react';
import { styled } from 'styled-components';

const Styled = {
  CardContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 1.6rem;

    height: 100%;
    padding: 2.8rem 2.4rem 2.4rem;
    border-radius: 1.6rem;
    background: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.boxShadow.card};
  `,

  TopContainer: styled.div`
    width: 100%;
    padding-bottom: 1.5rem;
    border-bottom: ${({ theme }) => theme.border.gr5};

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  `,

  ProfileContainer: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1.4rem;

    .profileImg {
      width: 5.6rem;
      height: 5.6rem;
      padding: 1.68rem;
      border-radius: 9999px; //todo 왜안되는지 파악
      ${skeletonStyle}
    }
  `,

  NameContainer: styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.6rem;

    .sender {
      height: 2.1rem;
      width: 10rem;
      ${skeletonStyle}
    }

    .relation {
      width: 4.1rem;
      height: 2rem;
      border-radius: 0.4rem;

      ${skeletonStyle}
    }
  `,

  Message: styled.div`
    width: 100%;
    height: 10.6rem;

    .content {
      width: 100%;
      height: 2.5rem;
      margin-bottom: 1rem;
      overflow: hidden;
      ${skeletonStyle}
    }
  `,

  Date: styled.span`
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: -0.006rem;
    color: #999;
  `,
};

function CardMessagesSkeleton() {
  return (
    <Styled.CardContainer>
      <Styled.TopContainer>
        <Styled.ProfileContainer>
          <div className="profileImg">
            <Shimmer />
          </div>
          <Styled.NameContainer>
            <div className="sender">
              <Shimmer />
            </div>
            <div className="relation">
              <Shimmer />
            </div>
          </Styled.NameContainer>
        </Styled.ProfileContainer>
      </Styled.TopContainer>
      <Styled.Message>
        <div className="content">
          <Shimmer />
        </div>
        <div className="content">
          <Shimmer />
        </div>
        <div className="content">
          <Shimmer />
        </div>
      </Styled.Message>
      <Styled.Date></Styled.Date>
    </Styled.CardContainer>
  );
}

export default CardMessagesSkeleton;
