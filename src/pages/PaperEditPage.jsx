import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import PaperLayout from '@components/template/PaperLayout';
import Button from '@components/common/button/Button';
import InfiniteCardMessages from '@components/rollingPaperViewer/InfiniteCardMessages';
import InfiniteCardMessagesLoader from '@components/rollingPaperViewer/InfiniteCardMessagesLoader';
import useDeleteRecipientMutation from '@hooks/api/recipientsAPI/useDeleteRecipientMutation';
import routes from '@constants/routes';

const Styled = {
  ButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1.1rem;

    @media (max-width: 1247px) {
      display: flex;
      justify-content: center;
      position: fixed;
      left: 0;
      bottom: 0;
      margin-bottom: 2.4rem;
      width: 100%;
      z-index: 10;

      .button {
        min-width: 94%;
        padding: 1.4rem 0;
        font-size: 1.8rem;
        font-weight: 700;
      }
    }
  `,
};

function PaperEditPage() {
  const { id: recipientId } = useParams();
  const navigate = useNavigate();
  const handleSuccess = () => navigate(`${routes.home}`);

  const { mutate: deleteRecipitentMutate } = useDeleteRecipientMutation({
    recipientId,
    handleSuccess,
  });

  const handleClickDeleteBtn = () => {
    if (window.confirm('정말로 이 롤링페이퍼를 삭제하시겠어요?🤔')) {
      deleteRecipitentMutate();
    }
  };

  return (
    <PaperLayout>
      <Styled.ButtonContainer>
        <Button className="button" onClick={handleClickDeleteBtn}>
          삭제하기
        </Button>
      </Styled.ButtonContainer>

      <React.Suspense fallback={<InfiniteCardMessagesLoader />}>
        <InfiniteCardMessages recipientId={recipientId} isEditPage={true} />
      </React.Suspense>
    </PaperLayout>
  );
}

export default PaperEditPage;
