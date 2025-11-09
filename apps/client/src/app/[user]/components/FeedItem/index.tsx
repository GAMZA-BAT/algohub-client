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
import { useGroupInfoQueryObject } from "@/app/api/groups/query";
import { useSolutionQueryObject } from "@/app/api/solutions/query";
import Like from "@/shared/component/Like";
import { useSuspenseQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

interface FeedItemProps {
  solutionId: number;
  groupId: number;
}

const FeedItem = ({ solutionId, groupId }: FeedItemProps) => {
  const { data: solution } = useSuspenseQuery({
    ...useSolutionQueryObject(solutionId),
    retry: 0,
  });

  const { data: comments } = useSuspenseQuery({
    ...useCommentListQueryObject(solutionId),
    retry: 0,
  });

  const { data: group } = useSuspenseQuery({
    ...useGroupInfoQueryObject(groupId),
    retry: 0,
  });

  // 피드에 뜨게한 댓글 찾기 - 나를 제외한 최신 댓글
  const triggerComment = comments?.find(
    (comment) => comment.writerNickname !== solution?.nickname,
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

  return (
    <li
      className={feedItemContainer}
      aria-label={`${solution?.problemTitle}문제 풀이 피드`}
    >
      <section className={infoWrapper}>
        <Avatar
          alt={`${triggerCommentWritterProfileImage}님의 프로필 사진`}
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
            <span className={agoMinuteStyle}>
              {formatDistanceToNow(new Date(triggerCommentCreatedAt || ""), {
                addSuffix: true,
                locale: ko,
              })}
            </span>
          </p>
        </div>
      </section>

      <CodeCard
        problemTitle={solution?.problemTitle || ""}
        problemLevel={solution?.problemLevel || 0}
        content={solution?.content || ""}
      />

      <ul className={commentListStyle}>
        {comments?.reverse().map((comment) => (
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
              <Like />
            </div>
          </li>
        ))}
      </ul>

      <CommentInput
        solutionId={solutionId}
        profileUrl={solution?.profileImage}
        nickname={solution?.nickname}
      />
    </li>
  );
};

export default FeedItem;
