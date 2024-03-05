import { useMutation, useQueryClient } from '@tanstack/react-query';
import { showErrorToast, showToast } from '@components/common/Toast';
import recipientsAPI from '@/api/recipientsAPI';
import { API_RECIPIENTS } from '@constants/API';

function usePostRecipient() {
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
      showToast('이모지 전송 성공!🥳');
      queryClient.invalidateQueries([API_RECIPIENTS.BY_ID]);
    },
  });
}

export default usePostRecipient;
