import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
} from "@/shared/api/generated";
import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const blockListKey = ["block-list"] as unknown[];

export function useBlockListQuery({ q }: { q?: string }) {
  return useQuery({
    queryKey: blockListKey.concat([{ q }]),
    queryFn: () => blockListControllerGetList({ q }),
  });
}

export function useAddBlockItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    async onSettled() {
      await queryClient.invalidateQueries(
        blockListKey as InvalidateQueryFilters,
      );
    },
  });
}
export function useRemoveBlockItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    async onSettled() {
      await queryClient.invalidateQueries(
        blockListKey as InvalidateQueryFilters,
      );
    },
  });
}
