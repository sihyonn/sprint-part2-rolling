import { useMutation } from '@tanstack/react-query';
import recipientsAPI from '@/api/recipientsAPI';
import { showErrorToast, showToast } from '@components/common/Toast';

/**
 * useDeleteRecipientMutation - recipientId에 해당하는 대상의 롤링페이퍼를 삭제하기 위한 리액트 쿼리 커스텀 훅
 * @param {string} recipientId 삭제 대상의 아이디
 * @param {Function} mutationFn 메시지 삭제 요청 함수
 */

function useDeleteRecipientMutation({ recipientId, handleSuccess }) {
  return useMutation({
    mutationFn: async () => {
      return recipientsAPI.deleteRecipientById(recipientId);
    },
    onError: () => {
      showErrorToast(
        '삭제가 제대로 이루어지지 않았어요. 다시 시도해주세요! 🥹',
      );
    },
    onSuccess: () => {
      showToast('성공적으로 롤링페이퍼를 삭제했습니다! 🥳');
      handleSuccess();
    },
  });
}

export default useDeleteRecipientMutation;
