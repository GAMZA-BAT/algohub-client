import { getGroupList } from "@/api/groups";
import type { GroupListItem, GroupStatus } from "@/api/groups/type";
import type { StudyListType } from "@/view/user/setting/StudyList/StudyListTable/type";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetMyGroupsQuery = () => {
  return useSuspenseQuery({
    queryKey: ["groups"],
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
  }));
};
