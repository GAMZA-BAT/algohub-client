import { getGroupList, patchGroupVisibility } from "@/api/groups";
import type { GroupListItem, GroupStatus } from "@/api/groups/type";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import type { StudyListType } from "@/view/user/setting/StudyList/StudyListTable/type";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import type { HTTPError } from "ky";

export const useGetMyGroupsQuery = () => {
  return useSuspenseQuery({
    queryKey: ["groups", "setting"],
    queryFn: getGroupList,
    select: (data) =>
      [
        ...transformData(data.bookmarked, "bookmarked"),
        ...transformData(data.queued, "queued"),
        ...transformData(data.inProgress, "inProgress"),
        ...transformData(data.done, "done"),
      ].sort((a, b) => a.id - b.id),
  });
};

const transformData = (
  data: GroupListItem[],
  status: GroupStatus,
): StudyListType[] => {
  return data.map((item) => ({
    status,
    startDate: new Date(item.startDate),
    endDate: new Date(item.endDate),
    isOwner: item.isOwner,
    name: item.name,
    isBookmarked: item.isBookmarked,
    id: item.id,
    isVisible: item.isVisible,
  }));
};

export const useVisibilityMutation = (groupId: number) => {
  const queryClient = useQueryClient();

  const { showToast } = useToast();

  return useMutation({
    mutationFn: (flag: boolean) => patchGroupVisibility(groupId, flag),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["groups", "setting"],
      });
    },
    onError: (error: HTTPError) => {
      if (!error.response) return;

      const { status } = error.response;

      if (status === HTTP_ERROR_STATUS.FORBIDDEN) {
        showToast("참여하지 않은 그룹입니다.", "error");
      }
      if (status === HTTP_ERROR_STATUS.NOT_FOUND) {
        showToast("존재하지 않는 그룹입니다.", "error");
      }
    },
  });
};
