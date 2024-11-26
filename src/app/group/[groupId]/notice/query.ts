import { getNoticeById, getNotices } from "@/api/notices";
import type { NoticeListRequest, NoticeRequest } from "@/api/notices/type";
import {
  deleteNoticeAction,
  noticeAction,
  patchNoticeAction,
} from "@/app/group/[groupId]/notice/action";
import { useToast } from "@/common/hook/useToast";
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

export const usePatchNoticeMutation = (noticeId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (requestData: NoticeRequest) =>
      patchNoticeAction(noticeId, requestData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notice", noticeId],
      });
      showToast("정상적으로 수정되었어요.", "success");
    },
    onError: () => {
      showToast("정상적으로 수정되지 않았어요.", "error");
    },
  });
};

export const useDeleteNoticeMutation = (groupId: number, noticeId: number) => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: () => deleteNoticeAction(noticeId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notices", groupId],
      });
      showToast("정상적으로 삭제되었어요.", "success");
    },
    onError: () => {
      showToast("정상적으로 삭제되지 않았어요.", "error");
    },
  });
};
