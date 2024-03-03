import { showErrorToast } from '@components/common/Toast';
import { useQuery } from '@tanstack/react-query';

/**
 * useImagesQuery
 * 이미지 데이터를 쿼리하기 위한 리액트 쿼리 커스텀 훅
 * 주어진 queryKey로 캐시된 데이터를 조회하고 지정된 queryFn으로 데이터 패치
 * 요청 실패할 경우 에러용 Toast를 통해 오류 메시지 표시
 *
 * @param {string} queryKey 쿼리키, 여기에선 imagesAPI에 정의된 상수를 받습니다.
 * @param {Function} queryFn 데이터 패치 함수, Promise 반환. [getBackgroundImages || getProfileImages]
 */

function useImagesQuery(queryKey, queryFn) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await queryFn();
      return res.data; //바로 data만 리턴했지만 다른 상태들필요하면 res를 반환하면 됨!
    },
    onError: (error) => {
      showErrorToast(error);
    },
  });
}

export default useImagesQuery;
