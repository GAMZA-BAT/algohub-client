import CommentBox from "@/shared/component/CommentBox";
import CommentInput from "@/shared/component/CommentInput";
import type { Comment } from "@/shared/type";
import {
  useCommentMutataion,
  useDeleteCommentMutation,
} from "@/view/group/solved-detail/CommentSection/hook";
import { useEffect, useRef, useState } from "react";
import { commentInputStyle, sectionWrapper, ulStyle } from "./index.css";

type CommentSectionProps = {
  comments: Comment[];
  solutionId: string;
};

const CommentSection = ({ solutionId, comments }: CommentSectionProps) => {
  const commentRef = useRef<HTMLUListElement>(null);
  const [comment, setComment] = useState("");

  const { mutate: commentMutate } = useCommentMutataion(+solutionId);
  const { mutate: deleteMutate } = useDeleteCommentMutation(+solutionId);

  const handleCommentSubmit = () => {
    if (!comment) return;

    commentMutate(comment);

    setComment("");
  };

  useEffect(() => {
    if (commentRef.current) {
      commentRef.current.scrollTop = commentRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className={sectionWrapper}>
      <ul className={ulStyle} ref={commentRef}>
        {comments
          .sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt))
          .map((item) => (
            <CommentBox
              key={item.commentId}
              variant="detail"
              onDelete={() => deleteMutate(item.commentId)}
              onEdit={() => {}}
              {...item}
            />
          ))}
      </ul>
      <div className={commentInputStyle}>
        <CommentInput
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onSend={handleCommentSubmit}
        />
      </div>
    </div>
  );
};

export default CommentSection;
