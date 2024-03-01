import { showToast } from '@components/common/Toast';

export const copyToClipboard = (shareUrl) => {
  navigator.clipboard
    .writeText(shareUrl)
    .then(() => {
      showToast('URL이 복사 되었습니다.');
    })
    .catch((err) => {
      console.error('클립보드 복사에 실패했습니다.', err);
      showToast('클립보드 복사에 실패했습니다.');
    });
};
