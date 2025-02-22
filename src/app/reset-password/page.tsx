"use client";
import Button from "@/common/component/Button";
import Input from "@/common/component/Input";
import AuthHeader from "@/shared/component/AuthHeader";
import { containerStyle, wrapper } from "@/view/login/index.css";
import {
  descTextStyle,
  resetWrapper,
  titleTextStyle,
} from "@/view/reset-password/index.css";
import { useState } from "react";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");

  return (
    <div className={wrapper}>
      <AuthHeader isLoginPage hasLogo />
      <div className={containerStyle}>
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
          <Button size="large" disabled={!email} isActive={!!email}>
            재설정 링크 전송
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
