"use client";

import {
  commentFormStyle,
  enterSvgStyle,
  leaveCommentWrapper,
} from "@/app/[user]/components/CommentInput/index.css";
import { useCommentMutation } from "@/app/api/comments/mutation";
import { IcnEnter } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Input from "@/common/component/Input";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface CommentInputProps {
  solutionId: number;
  onCommentCountPlus: () => void;
}

const CommentInput = ({
  solutionId,
  onCommentCountPlus,
}: CommentInputProps) => {
  const { data } = useSession();
  const [comment, setComment] = useState("");

  const { mutate: postComment } = useCommentMutation(solutionId);

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postComment(comment);
    setComment("");
    onCommentCountPlus();
  };

  return (
    <section className={leaveCommentWrapper}>
      <IcnEnter width={24} height={24} aria-hidden className={enterSvgStyle} />
      <Avatar
        size="small"
        alt={`${data?.user?.nickname}님의 프로필 사진`}
        src={data?.user?.profileImage}
      />
      <form onSubmit={handleCommentSubmit} className={commentFormStyle}>
        <Input
          placeholder="의견을 남겨주세요."
          aria-label="풀이에 대한 의견을 남기는 input"
          value={comment}
          onChange={handleCommentChange}
        />
      </form>
    </section>
  );
};

export default CommentInput;
