"use client";

import { useMyGroupsQueryObject } from "@/app/api/users/query";
import { useSuspenseQuery } from "@tanstack/react-query";
import CountChip from "../CountChip";

const StudyCount = () => {
  const { data: studyCount } = useSuspenseQuery({
    ...useMyGroupsQueryObject(),
    select: (myGroups) =>
      myGroups
        ? Object.values(myGroups).reduce((acc, val) => acc + val.length, 0)
        : 0,
  });

  return <CountChip count={studyCount} />;
};

export default StudyCount;
