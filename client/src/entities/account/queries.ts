import {
  accountControllerGetAccount,
  accountControllerPatchAccount,
} from "@/shared/api/generated";
import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const accountKey = ["account"];
export function useAccountQuery() {
  return useQuery({
    queryKey: accountKey,
    queryFn: accountControllerGetAccount,
  });
}

export function useUpdateAccountMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: accountControllerPatchAccount,
    async onSettled() {
      await queryClient.invalidateQueries(accountKey as InvalidateQueryFilters);
    },
  });
}
