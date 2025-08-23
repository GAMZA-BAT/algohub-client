import { useMyGroupsQueryObject } from "@/app/api/users/query";
import { prefetchQuery } from "@/shared/util/prefetch";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import StudyList from "./StudyList";

const HydratedStudyList = async () => {
  const queryOption = useMyGroupsQueryObject();
  const queryClient = await prefetchQuery(queryOption);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StudyList />
    </HydrationBoundary>
  );
};

export default HydratedStudyList;
