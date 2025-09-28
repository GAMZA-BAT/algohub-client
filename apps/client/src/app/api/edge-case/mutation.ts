import { postEdgeCase } from "@/app/api/edge-case";
import { edgeCaseQueryKey } from "@/app/api/edge-case/query";
import { EdgeCaseRequest } from "@/app/api/edge-case/type";
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
