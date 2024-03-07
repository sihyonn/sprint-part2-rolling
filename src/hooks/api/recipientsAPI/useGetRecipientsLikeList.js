import { showErrorToast } from '@components/common/Toast';
import { useQuery } from '@tanstack/react-query';

function useGetRecipientsLikeList(queryKey, queryFn, limit, offset, sort) {
  return useQuery({
    queryKey: [queryKey, sort],
    queryFn: async () => {
      const res = await queryFn({
        limit: limit,
        offset: offset,
        sort: sort,
      });
      return res.data;
    },
    onError: (error) => {
      showErrorToast(error);
    },
  });
}

export default useGetRecipientsLikeList;
