import { deleteGroupMember } from "@/api/groups";
import { useToast } from "@/common/hook/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteMemberMutation = (groupId: number, memberId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  return useMutation({
    mutationFn: ({ userId, groupId }: { userId: number; groupId: number }) =>
      deleteGroupMember(userId, groupId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["deleteMember", groupId, memberId],
      });
      showToast("멤버가 정상적으로 삭제되었어요.", "success");
    },
    onError: () => {
      showToast("멤버가 정상적으로 삭제되지 않았어요.", "error");
    },
  });
};
