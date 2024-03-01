import { useEffect } from 'react';

const useKakaoShare = (shareUrl) => {
  const { Kakao } = window;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.REACT_APP_KAKAO_KEY);
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '📂Linkbrary',
        description: '폴더를 저장하고 공유해보세요! ',
        imageUrl: 'https://avatars.githubusercontent.com/u/124874266?v=4',
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: '15팀의 Linkbrary로 이동✨',
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      ],
    });
  };
  return { shareKakao };
};

export default useKakaoShare;
