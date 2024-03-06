import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { API_RECIPIENTS } from '@constants/API';
import recipientsAPI from '@/api/recipientsAPI';

function useInfiniteCardMessagesQuery(recipientId, limit = 6) {
  return useSuspenseInfiniteQuery({
    queryKey: [API_RECIPIENTS.RECIPIENTS, recipientId],
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await recipientsAPI.getMessageToRecipient({
        recipientId,
        limit,
        offset: pageParam,
      });

      return data;
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.next === null) {
        return undefined;
      }

      const nextPage = allPages.length * limit;
      if (lastPage?.count <= nextPage) {
        return undefined;
      }

      return nextPage;
    },
    retry: false,
  });
}

export default useInfiniteCardMessagesQuery;
