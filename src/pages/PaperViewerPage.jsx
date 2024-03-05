import React from 'react';

import InfiniteCardMessages from '@components/rollingPaperViewer/InfiniteCardMessages';
import Button from '@components/common/button/Button';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import routes from '@constants/routes';

const Styled = {
  ButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1.1rem;

    @media (max-width: 1247px) {
      display: none;
    }
  `,
};

function PaperViewerPage() {
  const navigate = useNavigate();
  const { id: recipientId } = useParams();

  return (
    <>
      <Styled.ButtonContainer>
        <Button onClick={() => navigate(`${routes.post}/${recipientId}/edit`)}>
          편집하기
        </Button>
      </Styled.ButtonContainer>
      <InfiniteCardMessages recipientId={recipientId} />
    </>
  );
}

export default PaperViewerPage;
