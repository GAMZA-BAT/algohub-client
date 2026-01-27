import { useMyGroupsQueryObject } from "@/app/api/users/query";
import { prefetchQuery } from "@/shared/util/prefetch";
import { HydrationBoundary } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

const HydratedStudyList = async ({ children }: PropsWithChildren) => {
  const dehydratedState = await prefetchQuery(useMyGroupsQueryObject());

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
};

export default HydratedStudyList;
