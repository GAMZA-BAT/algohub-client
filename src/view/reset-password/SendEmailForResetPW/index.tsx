"use client";
import { useSendEmailForResetPWMutation } from "@/app/reset-password/query";
import Button from "@/common/component/Button";
import Input from "@/common/component/Input";
import {
  descTextStyle,
  resetWrapper,
  titleTextStyle,
} from "@/view/reset-password/index.css";
import { useState } from "react";

const SendEmailForResetPW = () => {
  const [email, setEmail] = useState("");
  const { mutate: sendMutate } = useSendEmailForResetPWMutation();

  const handleSend = () => sendMutate(email);

  return (
    <div className={resetWrapper}>
      <h1 className={titleTextStyle}>비밀번호 재설정</h1>
      <Input
        size="large"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className={descTextStyle}>
        비밀번호 재설정을 위해 회원가입에 사용한 이메일을 입력해주세요
      </p>
      <Button
        size="large"
        disabled={!email}
        isActive={!!email}
        onClick={handleSend}
      >
        재설정 링크 전송
      </Button>
    </div>
  );
};

export default SendEmailForResetPW;
