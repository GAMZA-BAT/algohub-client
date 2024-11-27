"use client";

import {
  useCommentListQuery,
  useCommentMutataion,
  useDeleteCommentMutation,
} from "@/app/group/[groupId]/solved-detail/[id]/query";
import CommentBox from "@/shared/component/CommentBox";
import CommentInput from "@/shared/component/CommentInput";
import { CommentsProvider } from "@/view/group/solved-detail/CommentSection/provider";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { commentInputStyle, sectionWrapper, ulStyle } from "./index.css";

type CommentSectionProps = {
  solutionId: string;
};

const CommentSection = ({ solutionId }: CommentSectionProps) => {
  const commentRef = useRef<HTMLUListElement>(null);
  const [comment, setComment] = useState("");

  const { mutate: commentAction } = useCommentMutataion(+solutionId);
  const { mutate: deleteMutate } = useDeleteCommentMutation(+solutionId);
  const { data: comments } = useCommentListQuery(+solutionId);

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!comment) return;

    commentAction(comment);

    setComment("");
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
        />
      </form>
    </div>
  );
};

export default CommentSection;
