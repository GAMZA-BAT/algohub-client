import { IcnBtnSend } from "@/asset/svg";
import Input, { type InputProps } from "@/common/component/Input";
import {
  containerStyle,
  inputStyle,
  profileStyle,
  sendIconStyle,
} from "@/shared/component/CommentInput/index.css";
import Image from "next/image";
import { type ForwardedRef, type KeyboardEvent, forwardRef } from "react";

type CommentInputProps = InputProps & {
  variant?: "notice" | "detail";
  profileUrl?: string;
  onSend?: () => void;
};

const CommentInput = (
  { variant, profileUrl, onSend, ...props }: CommentInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSend?.();
    }
  };

  return (
    <div className={containerStyle}>
      <Image
        className={profileStyle}
        src={profileUrl ?? ""}
        alt="프로필 이미지"
      />
      <Input
        placeholder="의견을 남겨주세요"
        ref={ref}
        className={inputStyle({ variant })}
        onKeyDown={handleKeyDown}
        {...props}
      />

      {variant === "notice" && (
        <IcnBtnSend
          onClick={onSend}
          className={sendIconStyle}
          width={24}
          height={24}
        />
      )}
    </div>
  );
};

export default forwardRef(CommentInput);
