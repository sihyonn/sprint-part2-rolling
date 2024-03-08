import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { API_RECIPIENTS } from '@constants/API';
import recipientsAPI from '@/api/recipientsAPI';

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
