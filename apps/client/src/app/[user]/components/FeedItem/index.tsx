"use client";
import Avatar from "@/common/component/Avatar";
import CodeCard from "@/shared/component/CodeCard";

import CommentInput from "@/app/[user]/components/CommentInput";
import {
  agoMinuteStyle,
  commentItemStyle,
  commentListStyle,
  commentNameStyle,
  commentStyle,
  commentWrapper,
  descriptionStyle,
  feedItemContainer,
  infoTextWrapper,
  infoWrapper,
  nameStyle,
  studyNameStyle,
} from "@/app/[user]/components/FeedItem/index.css";
import { useCommentListQueryObject } from "@/app/api/comments/query";
import type { CommentContent } from "@/app/api/comments/type";
import { useGroupInfoQueryObject } from "@/app/api/groups/query";
import { useSolutionQueryObject } from "@/app/api/solutions/query";
import { formatDistanceDate } from "@/common/util/date";
import { useSuspenseQueries } from "@tanstack/react-query";
import { useMemo, useRef } from "react";

interface FeedItemProps {
  solutionId: number;
  groupId: number;
}

const FeedItem = ({ solutionId, groupId }: FeedItemProps) => {
  const commentCountRef = useRef(3);

  const [{ data: solution }, { data: comments }, { data: group }] =
    useSuspenseQueries({
      queries: [
        {
          ...useSolutionQueryObject(solutionId),
          retry: 0,
        },
        {
          ...useCommentListQueryObject(solutionId),
          retry: 0,
          select: (data: CommentContent[]) =>
            [...data]
              .reverse()
              .slice(data.length - commentCountRef.current, data.length),
        },
        {
          ...useGroupInfoQueryObject(groupId),
          retry: 0,
        },
      ],
    });

  // 피드에 뜨게한 댓글 찾기 - 나를 제외한 최신 댓글
  const triggerComment = useMemo(
    () =>
      comments?.find(
        (comment) => comment.writerNickname !== solution?.nickname,
      ),
    [comments, solution?.nickname],
  );

  const [
    triggerCommentWritterName,
    triggerCommentWritterProfileImage,
    triggerCommentCreatedAt,
  ] = [
    triggerComment?.writerNickname,
    triggerComment?.writerProfileImage,
    triggerComment?.createdAt,
  ];

  const handleCommentCountPlus = () => {
    commentCountRef.current += 1;
  };

  return (
    <li>
      <article className={feedItemContainer}>
        <section className={infoWrapper}>
          <Avatar
            alt={`${triggerCommentWritterName}님의 프로필 사진`}
            size="small"
            src={triggerCommentWritterProfileImage}
          />
          <div className={infoTextWrapper}>
            <p className={descriptionStyle}>
              <span className={nameStyle}>{triggerCommentWritterName}</span>님이{" "}
              <span className={nameStyle}>{solution?.nickname}</span>님의 풀이에
              댓글을 남겼습니다.
            </p>
            <p>
              <span className={studyNameStyle}>{group?.name}</span>
              <time
                className={agoMinuteStyle}
                dateTime={triggerCommentCreatedAt}
              >
                {formatDistanceDate(triggerCommentCreatedAt || "")}
              </time>
            </p>
          </div>
        </section>

        <CodeCard
          problemTitle={solution?.problemTitle || ""}
          problemLevel={solution?.problemLevel || 0}
          content={solution?.content || ""}
          language={solution?.language || "Python"}
        />

        <ul className={commentListStyle}>
          {comments?.map((comment) => (
            <li
              key={comment.commentId}
              className={commentItemStyle}
              aria-label={`${comment.writerNickname}님의 댓글`}
            >
              <Avatar
                size="small"
                alt={`${comment.writerNickname}님의 프로필 사진`}
                src={comment.writerProfileImage}
              />
              <div className={commentWrapper}>
                <p className={commentNameStyle}>{comment.writerNickname}</p>
                <p className={commentStyle}>{comment.content}</p>
              </div>
            </li>
          ))}
        </ul>

        <CommentInput
          onCommentCountPlus={handleCommentCountPlus}
          solutionId={solutionId}
          profileUrl={solution?.profileImage}
          nickname={solution?.nickname}
        />
      </article>
    </li>
  );
};

export default FeedItem;
