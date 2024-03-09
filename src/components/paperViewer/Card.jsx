import React, { useState } from 'react';
import styled from 'styled-components';

import ProfileBadgeCard from '@/components/common/badge/ProfileBadgeCard';
import RelationBadge from '@/components/common/badge/RelationBadge';
import OutlinedButton from '@/components/common/button/OutlinedButton';
import { formatDateToYYYYMMDD } from '@utils/formatDate';
import DetailCardModal from '@components/paperViewer/DetailCardModal';
import QuillStrToHtml from '@components/common/QuillStrToHtml';
import useDeleteMessageMutation from '@hooks/api/recipientsAPI/useDeleteMessageMutation';

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

    &:hover {
      transform: translateY(-8px);
      transition: all ease-in-out 0.25s;
    }
    cursor: pointer;
    & * {
      cursor: pointer;
    }
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
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      word-break: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    strong {
      font-weight: 700;
    }
  `,

  Message: styled.div`
    width: 100%;
    height: 10.6rem;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;

    color: #4a4a4a;
    font-size: 1.75rem;
    line-height: 2.8rem;
    letter-spacing: -0.018rem;
  `,

  Date: styled.span`
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: -0.006rem;
    color: #999;
  `,
};

/**
 * Card - 각각의 페이퍼 카드 컴포넌트
 * @param {Object} data 카드 메시지 정보 데이터
 * @param {boolean} isEditPage 편집페이지 여부
 */

function Card({ data, isEditPage = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate: deleteMessageMutate } = useDeleteMessageMutation({
    messageId: data.id,
  });

  const handleClickDeleteBtn = (e) => {
    e.stopPropagation();

    if (window.confirm('정말로 이 카드메시지를 삭제하시겠어요?🤔')) {
      deleteMessageMutate();
    }
  };

  return (
    <>
      <Styled.CardContainer onClick={() => setIsModalOpen(true)}>
        <Styled.TopContainer>
          <Styled.ProfileContainer>
            <ProfileBadgeCard profileImg={data.profileImageURL} />
            <Styled.NameContainer>
              <span>
                From. <strong>{data.sender}</strong>
              </span>
              <RelationBadge type={data.relationship} />
            </Styled.NameContainer>
          </Styled.ProfileContainer>
          {isEditPage && (
            <OutlinedButton
              iconType={'delete'}
              onClick={handleClickDeleteBtn}
            />
          )}
        </Styled.TopContainer>
        <Styled.Message>
          <QuillStrToHtml htmlStr={data.content} fontStyle={data.font} />
        </Styled.Message>
        <Styled.Date>{formatDateToYYYYMMDD(data.createdAt)}</Styled.Date>
      </Styled.CardContainer>
      {isModalOpen && <DetailCardModal setOpen={setIsModalOpen} data={data} />}
    </>
  );
}

export default Card;
