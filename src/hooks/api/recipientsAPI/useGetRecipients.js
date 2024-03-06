import { showErrorToast } from '@components/common/Toast';
import { useQuery } from '@tanstack/react-query';

function useGetRecipientsQuery(queryKey, queryFn, id) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await queryFn(id);
      return res.data;
    },
    onError: (error) => {
      showErrorToast(error);
    },
  });
}

export default useGetRecipientsQuery;
