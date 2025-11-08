"use client";

import FeedItem from "@/app/[user]/components/FeedItem";
import {
  listStyle,
  titleStyle,
} from "@/app/[user]/components/MyFeedSection/index.css";
import { useMyFeedsQueryObject } from "@/app/api/users/query";
import { useQuery } from "@tanstack/react-query";
import { useId } from "react";

const MyFeedSection = () => {
  const { data } = useQuery(useMyFeedsQueryObject());
  const titleId = useId();

  return (
    <section aria-labelledby={titleId}>
      <h2 id={titleId} className={titleStyle}>
        내 피드
      </h2>

      <ul className={listStyle}>
        {data?.solutionCommentActivityList.map((item) => (
          <FeedItem
            key={item.solutionId}
            solutionId={item.solutionId}
            groupId={item.groupId}
          />
        ))}
      </ul>
    </section>
  );
};

export default MyFeedSection;
