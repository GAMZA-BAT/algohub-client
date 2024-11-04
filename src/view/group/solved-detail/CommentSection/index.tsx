import CommentBox from "@/shared/component/CommentBox";
import CommentInput from "@/shared/component/CommentInput";
import type { Comment } from "@/shared/type";
import { useEffect, useRef } from "react";
import { commentInputStyle, sectionWrapper, ulStyle } from "./index.css";

type CommentSectionProps = {
  comments: Comment[];
};

const CommentSection = ({ comments }: CommentSectionProps) => {
  const commentRef = useRef<HTMLUListElement>(null);

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
          .map(({ writerProfileImage, ...item }, idx) => (
            <CommentBox key={idx} {...item} variant="detail" />
          ))}
      </ul>
      <div className={commentInputStyle}>
        <CommentInput />
      </div>
    </div>
  );
};

export default CommentSection;
