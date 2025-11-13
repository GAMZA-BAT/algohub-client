import {
  commentFormStyle,
  commentInputStyle,
  leaveCommentWrapper,
} from "@/app/[user]/components/CommentInput/index.css";
import { useCommentMutation } from "@/app/api/comments/mutation";
import { IcnEnter } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Input from "@/common/component/Input";
import { useState } from "react";

interface CommentInputProps {
  profileUrl?: string;
  nickname?: string;
  solutionId: number;
}

const CommentInput = ({
  profileUrl,
  nickname,
  solutionId,
}: CommentInputProps) => {
  const [comment, setComment] = useState("");

  const { mutate: postComment } = useCommentMutation(solutionId);

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postComment(comment);
    setComment("");
  };

  return (
    <section className={leaveCommentWrapper}>
      <IcnEnter width={24} height={24} aria-hidden />
      <Avatar
        size="small"
        alt={`${nickname}님의 프로필 사진`}
        src={profileUrl}
      />
      <form onSubmit={handleCommentSubmit} className={commentFormStyle}>
        <Input
          placeholder="의견을 남겨주세요."
          aria-label="풀이에 대한 의견을 남기는 input"
          className={commentInputStyle}
          value={comment}
          onChange={handleCommentChange}
        />
      </form>
    </section>
  );
};

export default CommentInput;
