import { useMyGroupsQueryObject } from "@/app/api/users/query";
import { prefetchQuery } from "@/shared/util/prefetch";
import { countTextStyle, countWrapper } from "./index.css";

const StudyCount = async () => {
  const queryOption = useMyGroupsQueryObject();
  const queryClient = await prefetchQuery(queryOption, true);
  const myGroups = queryClient.getQueryData(queryOption.queryKey);

  const studyCount = myGroups
    ? Object.values(myGroups).reduce((acc, val) => acc + val.length, 0)
    : 0;

  return (
    <div className={countWrapper}>
      <span className={countTextStyle}>{studyCount}</span>
    </div>
  );
};

export default StudyCount;
