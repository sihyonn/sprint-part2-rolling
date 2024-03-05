import { useMutation } from '@tanstack/react-query';
import recipientsAPI from '@/api/recipientsAPI';
import { showErrorToast, showToast } from '@components/common/Toast';

function useDeleteRecipientMutation({ recipientId, handleSuccess }) {
  console.log(recipientId);
  return useMutation({
    mutationFn: async () => {
      return recipientsAPI.deleteRecipientById(recipientId);
    },
    onError: () => {
      showErrorToast('삭제가 제대로 이루어지지 않았어요. 다시 시도해주세요!🥹');
    },
    onSuccess: () => {
      showToast('성공적으로 롤링페이퍼를 삭제했습니다!🥳');
      handleSuccess();
    },
  });
}

export default useDeleteRecipientMutation;
