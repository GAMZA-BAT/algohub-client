"use client";
import AuthHeader from "@/shared/component/AuthHeader";
import { wrapper } from "@/view/login/index.css";
import Stepper from "@/view/signup/Stepper";
import { SIGNUP_STEPS, STEP_COMPONENTS } from "@/view/signup/constant";
import { containerStyle } from "@/view/signup/index.css";
import { useState } from "react";

const SignupPage = () => {
  const [curStep, setCurStep] = useState(SIGNUP_STEPS.EMAIL_VERIFICATION);
  const StepComponent = STEP_COMPONENTS[curStep];

  return (
    <div className={wrapper}>
      <AuthHeader />
      <Stepper
        curStep={curStep}
        stepName={["메일 인증", "비밀번호 설정", "프로필 생성"]}
      />
      <div className={containerStyle}>
        <StepComponent />
      </div>
    </div>
  );
};

export default SignupPage;
