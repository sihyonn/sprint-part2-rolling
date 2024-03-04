import { useInfiniteQuery } from '@tanstack/react-query';
import { API_RECIPIENTS } from '@constants/API';
import recipientsAPI from '@/api/recipientsAPI';

function useInfiniteCardMessagesQuery(recipientId, limit = 6) {
  return useInfiniteQuery({
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
      const nextPageOffset = allPages.length * limit;
      console.log(limit);

      return lastPage.data?.length === limit ? nextPageOffset : undefined;
    },
    retry: 1,
  });
}

export default useInfiniteCardMessagesQuery;
