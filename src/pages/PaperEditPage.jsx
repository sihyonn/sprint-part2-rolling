import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import Button from '@components/common/button/Button';
import InfiniteCardMessages from '@components/paperViewer/InfiniteCardMessages';
import InfiniteCardMessagesLoader from '@components/paperViewer/InfiniteCardMessagesLoader';
import useDeleteRecipientMutation from '@hooks/api/recipientsAPI/useDeleteRecipientMutation';
import routes from '@constants/routes';
import OutlinedButton from '@components/common/button/OutlinedButton';
import { BUTTON_NAME } from '@constants/BUTTON';

const Styled = {
  ButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.8rem;
    margin-bottom: 1.1rem;

    @media (max-width: 1247px) {
      display: flex;
      justify-content: space-between;
      gap: 1rem;

      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 0 2.3rem;
      margin-bottom: 2.4rem;
      z-index: 10;
      border-radius: 1.2rem;

      .delete-button,
      .complete-edit-button {
        width: 100%;
        padding: 1.4rem 0;
        font-size: 1.8rem;
        font-weight: 700;
      }
      .complete-edit-button {
        max-width: 60rem;
      }
    }
  `,

  DeleteBtn: styled(OutlinedButton)`
    border: ${({ theme }) => theme.border.pu1};
    background-color: #fff;
    color: ${({ theme }) => theme.color.mainPu};

    &:hover,
    &:focus {
      background-color: #f7f2fc;
    }
    &:active {
      border: ${({ theme }) => theme.border.pu1};
    }
  `,
};

function PaperEditPage() {
  const { id: recipientId } = useParams();
  const navigate = useNavigate();
  const handleSuccess = () => navigate(`${routes.list}`, { replace: true });

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
    <>
      <Styled.ButtonContainer>
        <Styled.DeleteBtn
          className="delete-button"
          onClick={handleClickDeleteBtn}
        >
          {BUTTON_NAME.DELETE}
        </Styled.DeleteBtn>
        <Button
          className="complete-edit-button"
          onClick={() => navigate(`${routes.post}/${recipientId}`)}
        >
          {BUTTON_NAME.COMPLETE_EDIT}
        </Button>
      </Styled.ButtonContainer>

      <React.Suspense fallback={<InfiniteCardMessagesLoader />}>
        <InfiniteCardMessages recipientId={recipientId} isEditPage={true} />
      </React.Suspense>
    </>
  );
}

export default PaperEditPage;
