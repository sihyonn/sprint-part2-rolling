import { showErrorToast } from '@components/common/Toast';
import { useQuery } from '@tanstack/react-query';

function useGetReactionsQuery(queryKey, queryFn, id, limit, offset) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await queryFn({
        recipientId: id,
        limit: limit,
        offset: offset,
      });
      return res.data;
    },
    onError: (error) => {
      showErrorToast(error);
    },
  });
}

export default useGetReactionsQuery;
