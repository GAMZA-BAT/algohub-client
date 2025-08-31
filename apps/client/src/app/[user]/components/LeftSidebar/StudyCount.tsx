import { useMyGroupsQueryObject } from "@/app/api/users/query";
import CountChip from "@/shared/component/CountChip";
import { prefetchQuery } from "@/shared/util/prefetch";

const StudyCount = async () => {
  const queryOption = useMyGroupsQueryObject();
  const queryClient = await prefetchQuery(queryOption, true);
  const myGroups = queryClient.getQueryData(queryOption.queryKey);

  const studyCount = myGroups
    ? Object.values(myGroups).reduce((acc, val) => acc + val.length, 0)
    : 0;

  return <CountChip count={studyCount} />;
};

export default StudyCount;
