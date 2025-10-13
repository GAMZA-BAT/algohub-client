"use client";

import {
  useCommentMutation,
  useDeleteCommentMutation,
} from "@/app/api/comments/mutation";
import { useCommentListQueryObject } from "@/app/api/comments/query";
import CommentBox from "@/shared/component/CommentBox";
import CommentInput from "@/shared/component/CommentInput";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { commentInputStyle, sectionWrapper, ulStyle } from "./index.css";
import { CommentsProvider } from "./provider";

type CommentSectionProps = {
  solutionId: number;
};

const CommentSection = ({ solutionId }: CommentSectionProps) => {
  const commentRef = useRef<HTMLUListElement>(null);
  const [comment, setComment] = useState("");
  const { data: session } = useSession();

  const { data: comments } = useQuery(useCommentListQueryObject(solutionId));
  const { mutate: commentAction } = useCommentMutation(solutionId);
  const { mutate: deleteMutate } = useDeleteCommentMutation(solutionId);

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comment) return;

    commentAction(comment, {
      onSuccess: () => setComment(""),
    });
  };

  useEffect(() => {
    if (commentRef.current) {
      commentRef.current.scrollTop = commentRef.current.scrollHeight;
    }
  }, [comments]);

  return (
    <div className={sectionWrapper}>
      <ul className={ulStyle} ref={commentRef}>
        <CommentsProvider solutionId={+solutionId}>
          {comments
            ?.sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt))
            .map((item) => (
              <CommentBox
                key={item.commentId}
                variant="detail"
                onDelete={deleteMutate}
                isMine={item.writerNickname === session?.user?.nickname}
                {...item}
              />
            ))}
        </CommentsProvider>
      </ul>
      <form onSubmit={handleCommentSubmit} className={commentInputStyle}>
        <CommentInput
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          profileUrl={session?.user?.profileImage}
        />
      </form>
    </div>
  );
};

export default CommentSection;
