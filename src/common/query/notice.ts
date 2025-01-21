
import type { NoticeListRequest } from "@/app/api/notices/type";
import { createQueryKeys } from "@lukemorales/query-key-factory";

export const notice = createQueryKeys("notice", {
  all: ({ groupId, page = 0 }: NoticeListRequest) => {
    queryKey: [groupId, page],
    queryFn: () => getNotices(groupId, page),
  },
});
