import React from 'react';
import BackdropModal from '../modal/BackdropModal';
import { styled } from 'styled-components';
import Button from '@/components/common/button/Button';
import ProfileBadgeCard from '@/components/common/badge/ProfileBadgeCard';
import RelationBadge from '@/components/common/badge/RelationBadge';
import { formatDateToYYYYMMDD } from '@utils/formatDate';

const Styled = {
  WriteInfoBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
    padding-bottom: 2rem;
    border-bottom: ${({ theme }) => theme.border.gr5};
  `,
  From: styled.div`
    display: flex;
    gap: 1.6rem;
  `,
  NameAndRelation: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    .span {
      font-size: 2rem;
      line-height: 2.4rem;
    }
    .sender {
      font-weight: 700;
    }
  `,
  Date: styled.div`
    position: absolute;
    right: 0;
    top: 1.3rem;

    font-size: 1.4rem;
    line-height: 2rem;
    color: #999;
  `,
  MessageBox: styled.div`
    max-width: 50rem;
    max-height: 24rem;
    margin: 1.6rem 0 2.4rem;
    overflow-y: auto;

    font-size: 1.8rem;
    line-height: 2.8rem;
    color: #5a5a5a;
  `,
};

function DetailCardModal({ setOpen, data }) {
  return (
    <BackdropModal setOpen={setOpen}>
      <Styled.WriteInfoBox>
        <Styled.From>
          <ProfileBadgeCard profileImg={data.profileImageURL} />
          <Styled.NameAndRelation>
            <span>
              From. <span className="sender">{data.sender}</span>
            </span>
            <RelationBadge type={data.relationship} />
          </Styled.NameAndRelation>
        </Styled.From>
        <Styled.Date>{formatDateToYYYYMMDD(data.createdAt)}</Styled.Date>
      </Styled.WriteInfoBox>
      <Styled.MessageBox>{data.content}</Styled.MessageBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={() => setOpen(false)} style={{ width: '90rem' }}>
          확인
        </Button>
      </div>
    </BackdropModal>
  );
}

export default DetailCardModal;
