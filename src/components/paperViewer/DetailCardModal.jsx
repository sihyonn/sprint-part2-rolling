import React from 'react';
import { styled } from 'styled-components';

import BackdropModal from '@/components/common/modal/BackdropModal';
import Button from '@/components/common/button/Button';
import ProfileBadgeCard from '@/components/common/badge/ProfileBadgeCard';
import RelationBadge from '@/components/common/badge/RelationBadge';
import QuillStrToHtml from '@components/common/QuillStrToHtml';
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
    height: 24rem;
    margin: 1.6rem 0 2.4rem;
    overflow-y: auto;
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: #5a5a5a;
    word-wrap: break-word;
    @media (max-width: 767px) {
      max-width: 100%;
      height: 20rem;
    }
  `,
};

/**
 * DetailCardModal - 카드 클릭시 나타나는 세부 메시지를 나타내는 모달 컴포넌트
 * @param {function} setOpen 모달 오픈 여부
 * @param data 모달에 들어갈 카드 메시지 데이터
 */

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
      <Styled.MessageBox>
        <QuillStrToHtml htmlStr={data.content} fontStyle={data.font} />
      </Styled.MessageBox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={() => setOpen(false)} style={{ width: '90rem' }}>
          확인
        </Button>
      </div>
    </BackdropModal>
  );
}

export default DetailCardModal;
