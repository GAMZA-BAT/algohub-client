import { getGroupList, patchGroupVisibility } from "@/api/groups";
import type { GroupResponse, GroupStatus } from "@/api/groups/type";
import {
  getNotificationSettingList,
  patchNotificationSetting,
} from "@/api/notifications";
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
          showToast("정상적으로 수정되지 않았습니다.", "error");
        }
      }
    },
  });
};

export const useNotificationSettingListQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["notifications", "setting"],
    queryFn: getNotificationSettingList,
  });

  return data;
};

export const useNotificationSettingMutation = () => {
  const queryClient = useQueryClient();

  const { showToast } = useToast();

  return useMutation({
    mutationFn: patchNotificationSetting,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notifications", "setting"],
      });
    },
    onError: (error: HTTPError) => {
      if (!error.response) return;

      const { status } = error.response;

      switch (status) {
        case HTTP_ERROR_STATUS.FORBIDDEN: {
          showToast("참여하지 않은 그룹입니다.", "error");
          break;
        }
        case HTTP_ERROR_STATUS.NOT_FOUND: {
          showToast("존재하지 않는 그룹입니다.", "error");
          break;
        }
        default: {
          showToast("정상적으로 수정되지 않았습니다.", "error");
        }
      }
    },
  });
};
