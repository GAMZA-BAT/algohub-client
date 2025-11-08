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
import { differenceInMinutes } from "date-fns";

interface FeedItemProps {
  solutionId: number;
  groupId: number;
}

const FeedItem = ({ solutionId, groupId }: FeedItemProps) => {
  const { data: solution, error: solutionError } = useSuspenseQuery({
    ...useSolutionQueryObject(solutionId),
    retry: 0,
  });

  const { data: comments, error: commentsError } = useSuspenseQuery({
    ...useCommentListQueryObject(solutionId),
    retry: 0,
  });

  const { data: group, error: groupError } = useSuspenseQuery({
    ...useGroupInfoQueryObject(groupId),
    retry: 0,
  });

  if (solutionError || commentsError || groupError) {
    return null;
  }

  // 나를 제외한 최신 댓글
  const triggerComment = comments?.find(
    (comment) => comment.writerNickname !== solution?.nickname,
  );
  const [triggerCommentWritterName, triggerCommentWritterProfileImage] = [
    triggerComment?.writerNickname,
    triggerComment?.writerProfileImage,
  ];

  return (
    <article className={feedItemContainer}>
      <section className={infoWrapper}>
        {/* * TODO: 피드 조회 api 연결 후 이름 넣기 */}
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
              {differenceInMinutes(new Date(), comments?.[0]?.createdAt || "")}
              분 전
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
          <li key={comment.commentId} className={commentItemStyle}>
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
    </article>
  );
};

export default FeedItem;
