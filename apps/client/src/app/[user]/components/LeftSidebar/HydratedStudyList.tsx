import { useMyGroupsQueryObject } from "@/app/api/users/query";
import { prefetchQuery } from "@/shared/util/prefetch";
import { HydrationBoundary } from "@tanstack/react-query";
import StudyList from "./StudyList";

const HydratedStudyList = async () => {
  const dehydratedState = await prefetchQuery(useMyGroupsQueryObject());
  
  return (
    <HydrationBoundary state={dehydratedState}>
      <StudyList />
    </HydrationBoundary>
  );
};

export default HydratedStudyList;
