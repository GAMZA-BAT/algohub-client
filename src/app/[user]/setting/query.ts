import { getGroupList, patchGroupVisibility } from "@/app/api/groups";
import type {
  GroupListResponse,
  GroupResponse,
  GroupStatus,
} from "@/app/api/groups/type";
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
    queryKey: ["users", "setting"],
    queryFn: getGroupList,
    select: (data) =>
      (["bookmarked", "queued", "inProgress", "done"] as GroupStatus[])
        .flatMap((status) => transformData(data[status], status))
        .sort((a, b) => a.id - b.id),
  });
};

const transformData = (
  data: GroupResponse[],
  status: GroupStatus,
): StudyListType[] => {
  return data.map((item) => ({
    status,
    startDate: new Date(item.startDate),
    endDate: new Date(item.endDate),
    role: item.role,
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
    onMutate: async (flag: boolean) => {
      await queryClient.cancelQueries({ queryKey: ["users", "setting"] });

      const prevData = queryClient.getQueryData<GroupListResponse>([
        "users",
        "setting",
      ]);

      const newData = [
        ...prevData!.bookmarked,
        ...prevData!.done,
        ...prevData!.inProgress,
        ...prevData!.queued,
      ]
        .sort((a, b) => a.id - b.id)
        .map((item) =>
          item.id === groupId ? { ...item, isVisible: flag } : item,
        );

      queryClient.setQueryData(["users", "setting"], newData);

      return { prevData };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users", "setting"] });
    },
    onError: (error: HTTPError, _newData, context) => {
      queryClient.setQueryData(["users", "setting"], context?.prevData);

      if (!error.response) return;

      const { status } = error.response;

      switch (status) {
        case HTTP_ERROR_STATUS.FORBIDDEN: {
          showToast("참여하지 않은 그룹입니다.", "error");
          break;
        }
        case HTTP_ERROR_STATUS.NOT_FOUND: {
          showToast("참여하지 않은 그룹입니다.", "error");
          break;
        }
        default: {
          showToast("알 수 없는 에러입니다.", "error");
        }
      }
    },
  });
};
