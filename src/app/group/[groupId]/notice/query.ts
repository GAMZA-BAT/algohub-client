import { getNoticeById, getNotices } from "@/api/notices";
import type { NoticeListRequest, NoticeRequest } from "@/api/notices/type";
import { noticeAction } from "@/app/group/[groupId]/notice/action";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useNoticesQuery = ({ groupId, page = 0 }: NoticeListRequest) => {
  const { data } = useSuspenseQuery({
    queryKey: ["notices", groupId, page],
    queryFn: () => getNotices({ groupId, page }),
    staleTime: 0,
  });

  return { content: data.content, totalPages: data.totalPages };
};

export const useNoticeByIdQuery = (noticeId: number) => {
  return useSuspenseQuery({
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
