import { patchEdgeCaseLike, postEdgeCase } from "@/app/api/edge-case";
import { edgeCaseQueryKey } from "@/app/api/edge-case/query";
import type {
  EdgeCaseRequest,
  EdgeCaseResponse,
} from "@/app/api/edge-case/type";
import { useToast } from "@/common/hook/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEdgeCaseMutation = () => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: EdgeCaseRequest) => postEdgeCase(body),
    onSuccess: () => {
      showToast("반례를 등록하였어요", "success");
      queryClient.invalidateQueries({
        queryKey: edgeCaseQueryKey.list(),
      });
    },
    onError: () => {
      showToast("반례를 등록하는데 실패하였어요", "error");
    },
  });
};

export const useEdgeCaseLikeMutation = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (edgeCaseId: number) => patchEdgeCaseLike(edgeCaseId),
    onMutate: async (edgeCaseId) => {
      await queryClient.cancelQueries({
        queryKey: edgeCaseQueryKey.list(),
      });

      const previousData = queryClient.getQueryData<EdgeCaseResponse[]>(
        edgeCaseQueryKey.list(),
      );

      queryClient.setQueryData<EdgeCaseResponse[]>(
        edgeCaseQueryKey.list(),
        (old) => {
          if (!old) return old;

          return old.map((edgeCase) => {
            if (edgeCase.edgeCaseId === edgeCaseId) {
              return {
                ...edgeCase,
                isLiked: !edgeCase.isLiked,
                like: edgeCase.isLiked
                  ? edgeCase.like - 1 // 좋아요 취소 시 -1
                  : edgeCase.like + 1, // 좋아요 시 +1
              };
            }
            return edgeCase;
          });
        },
      );

      return { previousData };
    },
    onError: (_err, _variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(edgeCaseQueryKey.list(), context.previousData);
      }
      showToast("좋아요 요청에 실패하였어요", "error");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: edgeCaseQueryKey.list(),
      });
    },
  });
};
