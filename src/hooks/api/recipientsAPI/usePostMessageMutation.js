import { useMutation } from '@tanstack/react-query';
import { showErrorToast, showToast } from '@components/common/Toast';
import recipientsAPI from '@/api/recipientsAPI';

/**
 * usePostMessageMutation
 * 롤링페이퍼 대상에게 메시지를 생성하기 위한 리액트 쿼리 커스텀 훅
 * 에러일경우 에러토스트, 성공할경우 일반토스트를 활용해 알림 표시
 */

function usePostMessageMutation(handleSuccess) {
  return useMutation({
    mutationFn: async ({ recipientId, data }) => {
      return recipientsAPI.postMessagesToRecipient({
        recipientId,
        data,
      });
    },
    onError: () => {
      showErrorToast('롤링페이퍼 받을 대상을 생성하는데 실패했어요🥹');
    },
    onSuccess: () => {
      showToast('성공적으로 롤링페이퍼를 작성했어요!⭐');
      handleSuccess();
    },
  });
}

export default usePostMessageMutation;
