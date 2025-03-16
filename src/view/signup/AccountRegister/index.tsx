"use client";
import { useState } from "react";
import Stepper from "../Stepper";
import { SIGNUP_STEPS } from "../constant";
import PasswordSetup from "./PasswordSetup";
import ProfileCreation from "./ProfileCreation";

const AccountRegister = () => {
  const [step, setStep] = useState(SIGNUP_STEPS.PASSWORD_SETUP);

  return (
    <div>
      <Stepper
        curStep={step}
        stepName={["메일 인증", "비밀번호 설정", "프로필 생성"]}
      />
      {step === SIGNUP_STEPS.PASSWORD_SETUP ? (
        <PasswordSetup />
      ) : (
        <ProfileCreation />
      )}
    </div>
  );
};

export default AccountRegister;
