import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconButton from '@/components/common/IconButton';
import ProfileBadgeCard from '@/components/common/ProfileBadgeCard';
import RelationBadge from '@/components/common/RelationBadge';
import deleteIcon from '@/assets/deletedIcon.svg';

const Styled = {
  CardContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: ${({ isEditCard }) => (isEditCard ? 'center' : 'start')};
    flex-direction: column;
    gap: 1.6rem;
    width: 38.4rem;
    height: 28rem;
    padding: 2.8rem 2.4rem 2.4rem 2.4rem;
    border-radius: 1.6rem;
    background: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.boxShadow.card};
    cursor: pointer;
  `,
  TopContainer: styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
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
      font-family: Pretendard;
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.4rem;
    }
  `,
  Bar: styled.div`
    width: 100%;
    height: 0.1rem;
    background: #eee;
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
      color: #4a4a4a;
      text-overflow: ellipsis;
      font-family: ${({ font }) => font};
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.8rem;
      letter-spacing: -0.018rem;
    }
  `,
  Date: styled.span`
    color: #999;
    font-family: Pretendard;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: -0.006rem;
  `,
};

const mockdata = {
  id: 28,
  recipientId: 11,
  sender: 'test user2',
  profileImageURL:
    'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
  relationship: '지인',
  content:
    'fweawreffewafedwsfseingfwejkoijsdlkwefioujfweolnowejlewfnofweanjowefjlfsadjoawefjkwefjioufwehklfjweohfwenuihfewikhwfeihfewohwefiofhewojfweoljfweonfaewolhjrfweioasdqawdwqadwqwqa',
  font: '나눔명조',
  createdAt: '2023-10-31T09:58:47.272896Z',
};

function CardAdd({ data, isEditCard }) {
  return (
    <Styled.CardContainer isEditCard={isEditCard}>
      <Link to={`/post/${data.id}/message`}>
        <IconButton shape="plus" />
      </Link>
    </Styled.CardContainer>
  );
}

function Card({ data = mockdata, isEditCard = false, isEditPage = true }) {
  // data는 부모 컴포넌트에서 받아오기
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
        {isEditPage && <img src={deleteIcon} alt="delete" />}
      </Styled.TopContainer>
      <Styled.Bar />
      <Styled.Message font={data.font}>
        <span>{data.content}</span>
      </Styled.Message>
      <Styled.Date>{data.createdAt.split('T')[0]}</Styled.Date>
    </Styled.CardContainer>
  );
}

export default Card;
