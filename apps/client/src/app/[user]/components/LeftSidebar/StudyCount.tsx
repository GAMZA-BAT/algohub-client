import { useMyGroupsQueryObject } from "@/app/api/users/query";
import { prefetchQuery } from "@/shared/util/prefetch";
import CountChip from "../CountChip";

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
