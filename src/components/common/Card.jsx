import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import IconButton from '@/components/common/button/IconButton';
import ProfileBadgeCard from '@/components/common/badge/ProfileBadgeCard';
import RelationBadge from '@/components/common/badge/RelationBadge';
import OutlinedButton from '@/components/common/button/OutlinedButton';
import { formatDateToYYYYMMDD } from '@utils/formatDate';

const Styled = {
  CardContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: ${({ isEditCard }) => (isEditCard ? 'center' : 'start')};
    flex-direction: column;
    gap: 1.6rem;

    padding: 2.8rem 2.4rem 2.4rem;
    border-radius: 1.6rem;
    background: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.boxShadow.card};
    cursor: pointer;
  `,

  TopContainer: styled.div`
    width: 100%;
    padding-bottom: 1.5rem;
    border-bottom: ${({ theme }) => theme.border.gr5};

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    img {
      width: 4rem;
      height: 4rem;
    }
  `,

  ProfileContainer: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1.4rem;
  `,

  NameContainer: styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.6rem;

    span {
      color: ${({ theme }) => theme.color.black};
      font-size: 2rem;
      line-height: 2.4rem;
    }
  `,

  Message: styled.div`
    width: 100%;
    height: 10.6rem;

    span {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      word-break: break-word;
      overflow: hidden;
      text-overflow: ellipsis;

      color: #4a4a4a;
      font-family: ${({ font }) => font};
      font-size: 1.75rem;
      line-height: 2.8rem;
      letter-spacing: -0.018rem;
    }
  `,

  Date: styled.span`
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: -0.006rem;
    color: #999;
  `,
};

function CardAdd({ data, isEditCard }) {
  const navigate = useNavigate();
  return (
    <Styled.CardContainer isEditCard={isEditCard}>
      <IconButton
        shape="plus"
        onClick={() => navigate(`/post/${data.id}/message`)}
      />
    </Styled.CardContainer>
  );
}

function Card({ data, isEditCard = false, isEditPage = true }) {
  return isEditCard ? (
    <CardAdd data={data} isEditCard={isEditCard} />
  ) : (
    <Styled.CardContainer>
      <Styled.TopContainer>
        <Styled.ProfileContainer>
          <ProfileBadgeCard profileImg={data.profileImageURL} />
          <Styled.NameContainer>
            <span>From. {data.sender}</span>
            <RelationBadge type={data.relationship} />
          </Styled.NameContainer>
        </Styled.ProfileContainer>
        {isEditPage && <OutlinedButton iconType={'delete'} />}
      </Styled.TopContainer>
      <Styled.Message font={data.font}>
        <span>{data.content}</span>
      </Styled.Message>
      <Styled.Date>{formatDateToYYYYMMDD(data.createdAt)}</Styled.Date>
    </Styled.CardContainer>
  );
}

export default Card;
