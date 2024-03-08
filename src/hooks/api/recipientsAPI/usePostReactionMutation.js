import { useMutation, useQueryClient } from '@tanstack/react-query';

import { showErrorToast } from '@components/common/Toast';
import { API_RECIPIENTS } from '@constants/API';
import recipientsAPI from '@/api/recipientsAPI';

/**
 * usePostReactionMutation
 * 롤링페이퍼 대상에게 이모지를 보내기 위한 리액트 쿼리 커스텀 훅
 */
function usePostReactionMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ recipientId, recipientData }) => {
      return recipientsAPI.postReactions({
        recipientId: recipientId,
        data: recipientData,
      });
    },
    onError: () => {
      showErrorToast('이모지 전송 실패');
    },
    onSuccess: () => {
      queryClient.invalidateQueries([API_RECIPIENTS.BY_ID]);
    },
  });
}

export default usePostReactionMutation;
