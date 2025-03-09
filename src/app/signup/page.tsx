"use client";
import AuthHeader from "@/shared/component/AuthHeader";
import FormFooter from "@/shared/component/FormFooter";
import { wrapper } from "@/view/login/index.css";
import SignupForm from "@/view/signup/SignupForm";
import Stepper from "@/view/signup/Stepper";
import { SIGNUP_STEPS } from "@/view/signup/constant";
import { containerStyle } from "@/view/signup/index.css";
import { useState } from "react";

const SignupPage = () => {
  const [curStep, setCurStep] = useState(SIGNUP_STEPS.EMAIL_VERIFICATION);

  return (
    <div className={wrapper}>
      <AuthHeader />
      <Stepper
        curStep={curStep}
        stepName={["메일 인증", "비밀번호 설정", "프로필 생성"]}
      />
      <div className={containerStyle}>
        <SignupForm />
        <FormFooter
          guideLabel="이미 계정이 있으신가요?"
          link={{ href: "/login", label: "로그인하기" }}
        />
      </div>
    </div>
  );
};

export default SignupPage;
