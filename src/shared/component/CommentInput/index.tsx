"use client";

import { IcnBtnSend } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Input, { type InputProps } from "@/common/component/Input";
import {
  containerStyle,
  inputStyle,
  sendIconStyle,
} from "@/shared/component/CommentInput/index.css";
import { type ForwardedRef, type KeyboardEvent, forwardRef } from "react";

type CommentInputProps = InputProps & {
  profileUrl?: string;
  onSend?: () => void;
};

const CommentInput = (
  { profileUrl, onSend, ...props }: CommentInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSend?.();
    }
  };

  return (
    <div className={containerStyle}>
      <Avatar src={profileUrl} alt="프로필 이미지" size="small" />
      <Input
        placeholder="의견을 남겨주세요"
        ref={ref}
        className={inputStyle}
        onKeyDown={handleKeyDown}
        {...props}
      />
      <IcnBtnSend
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSend?.();
        }}
        onClick={onSend}
        className={sendIconStyle}
        width={24}
        height={24}
      />
    </div>
  );
};

export default forwardRef(CommentInput);
