import { useMyGroupsQueryObject } from "@/app/api/users/query";
import { prefetchQuery } from "@/shared/util/prefetch";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import LeftSidebarContent from "./LeftSidebarContent";
import {
  countTextStyle,
  countWrapper,
  sidebarWrapper,
  titleStyle,
  titleWrapper,
} from "./index.css";

const UserPageLeftSidebar = async () => {
  const queryOption = useMyGroupsQueryObject();
  const queryClient = await prefetchQuery(queryOption);
  const myGroups = queryClient.getQueryData(queryOption.queryKey);

  const studyCount = myGroups
    ? Object.values(myGroups).reduce((acc, val) => acc + val.length, 0)
    : 0;

  return (
    <div className={sidebarWrapper}>
      <div className={titleWrapper}>
        <h2 className={titleStyle}>내가 속한 스터디</h2>
        <div className={countWrapper}>
          <span className={countTextStyle}>{studyCount}</span>
        </div>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <LeftSidebarContent />
      </HydrationBoundary>
    </div>
  );
};

export default UserPageLeftSidebar;
