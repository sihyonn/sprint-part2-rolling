import { useEffect } from 'react';

const useKakaoShare = (shareUrl) => {
  const { Kakao } = window;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.REACT_APP_KAKAO_KEY);
  }, [Kakao]);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '✉Rolling',
        description:
          '단 한 번의 클릭으로, 당신과 친구들의 따뜻한 추억이 담긴 롤링 페이퍼가 마법처럼 펼쳐집니다. 롤링에서 함께 소중한 순간을 기록해보세요.',
        imageUrl: 'https://avatars.githubusercontent.com/u/124874266?v=4',
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: '15팀의 Rolling으로 이동✨',
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
