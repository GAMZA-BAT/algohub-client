"use client";

import FeedItem from "@/app/[user]/components/FeedItem";
import {
  listStyle,
  titleStyle,
} from "@/app/[user]/components/MyFeedSection/index.css";
import { useMyFeedsQueryObject } from "@/app/api/users/query";
import Spinner from "@/common/component/Spinner";
import { alignCenterStyle } from "@/styles/shared.css";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { Suspense, useId } from "react";

const MyFeedSection = () => {
  const searchParams = useSearchParams();
  const hasSearchQuery = Boolean(searchParams.get("search"));

  const { data } = useQuery(useMyFeedsQueryObject());

  const titleId = useId();

  if (hasSearchQuery) {
    return null;
  }

  return (
    <section aria-labelledby={titleId}>
      <h2 id={titleId} className={titleStyle}>
        내 피드
      </h2>

      <Suspense fallback={<Spinner className={alignCenterStyle} />}>
        <ul className={listStyle}>
          {data?.solutionCommentActivityList.map((item) => (
            <FeedItem
              key={item.solutionId}
              solutionId={item.solutionId}
              groupId={item.groupId}
            />
          ))}
        </ul>
      </Suspense>
    </section>
  );
};

export default MyFeedSection;
