"use client";

import { IcnBtnSend } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Input, { type InputProps } from "@/common/component/Input";
import {
  containerStyle,
  inputStyle,
  sendIconStyle,
} from "@/shared/component/CommentInput/index.css";
import { type ForwardedRef, forwardRef } from "react";

type CommentInputProps = InputProps & {
  profileUrl?: string;
  onSend?: () => void;
};

const CommentInput = (
  { profileUrl, onSend, ...props }: CommentInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <div className={containerStyle}>
      <Avatar src={profileUrl} alt="프로필 이미지" size="small" />
      <Input
        placeholder="의견을 남겨주세요"
        ref={ref}
        className={inputStyle}
        {...props}
      />
      <button type="submit" onClick={onSend} className={sendIconStyle}>
        <IcnBtnSend width={24} height={24} />
      </button>
    </div>
  );
};

export default forwardRef(CommentInput);
