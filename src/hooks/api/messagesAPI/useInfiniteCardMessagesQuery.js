import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { API_RECIPIENTS } from '@constants/API';
import recipientsAPI from '@/api/recipientsAPI';

/**
 * useInfiniteCardMessagesQuery
 * 무한 스크롤 카드 메시지 쿼리를 위한 리액트쿼리 커스텀 훅
 * 첫 페이지의 데이터는 AddCard 자리를 제외하고 넣어주기 위해 limit에 차이 적용
 *
 * @param {string} recipientId 롤링페이퍼 대상 id
 * @param {boolean} isEditPage 편집페이지 여부
 * @param {number} [limit = 6] 한 페이지에 로드할 메시지 수
 */

function useInfiniteCardMessagesQuery(recipientId, isEditPage, limit = 6) {
  const initialLimit = isEditPage ? limit : limit - 1;

  return useSuspenseInfiniteQuery({
    queryKey: [API_RECIPIENTS.RECIPIENTS, recipientId, isEditPage],
    queryFn: async ({ pageParam = 0 }) => {
      const isFirstPage = pageParam === 0;
      const currentLimit = isFirstPage && !isEditPage ? initialLimit : limit;

      const { data } = await recipientsAPI.getMessageToRecipient({
        recipientId,
        limit: currentLimit,
        offset: pageParam,
      });

      return data;
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.next === null) {
        return undefined;
      }

      const isFirstPage = allPages.length === 1 && !isEditPage;
      const nextPage = isFirstPage ? initialLimit : allPages.length * limit - 1;

      if (lastPage?.count <= nextPage) {
        return undefined;
      }

      return nextPage;
    },
    retry: false,
  });
}

export default useInfiniteCardMessagesQuery;
