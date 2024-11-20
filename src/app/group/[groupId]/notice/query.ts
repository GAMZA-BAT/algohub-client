import { getNoticeById, getNotices } from "@/api/notices";
import type { NoticeRequest } from "@/api/notices/type";
import { noticeAction } from "@/app/group/[groupId]/notice/action";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useNoticesQuery = (groupId: number) => {
  return useQuery({
    queryKey: ["notices", groupId],
    queryFn: () => getNotices(groupId),
  });
};

export const useNoticeByIdQuery = (noticeId: number) => {
  return useQuery({
    queryKey: ["notice", noticeId],
    queryFn: () => getNoticeById(noticeId),
  });
};

export const useNoticeMutation = (groupId: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: (requestData: NoticeRequest) =>
      noticeAction(groupId, requestData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notices", groupId],
      });
      router.push(`/group/${groupId}/notice`);
    },
  });
};
