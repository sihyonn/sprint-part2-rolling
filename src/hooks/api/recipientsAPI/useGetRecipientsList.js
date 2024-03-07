import { showErrorToast } from '@components/common/Toast';
import { useQuery } from '@tanstack/react-query';

function useGetRecipientsList(queryKey, queryFn, limit, offset) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await queryFn({
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

export default useGetRecipientsList;
