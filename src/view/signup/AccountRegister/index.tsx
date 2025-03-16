"use client";
import { Form } from "@/shared/component/Form";
import { containerStyle } from "@/view/signup/index.css";
import { useState } from "react";
import Stepper from "../Stepper";
import { SIGNUP_STEPS } from "../constant";
import PasswordSetup from "./PasswordSetup";
import ProfileCreation from "./ProfileCreation";
import useSignupForm from "./useSignupForm";

const AccountRegister = () => {
  const [step, setStep] = useState(SIGNUP_STEPS.PASSWORD_SETUP);
  const {
    form,
    handleSubmit,
    passwordError,
    passwordMsg,
    nicknameMsg,
    isActive,
  } = useSignupForm();

  const handleNextStep = () => setStep(SIGNUP_STEPS.PROFILE_CREATION);

  return (
    <div>
      <Stepper
        curStep={step}
        stepName={["메일 인증", "비밀번호 설정", "프로필 생성"]}
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={containerStyle}
        >
          {step === SIGNUP_STEPS.PASSWORD_SETUP ? (
            <PasswordSetup
              form={form}
              passwordError={passwordError}
              passwordMsg={passwordMsg}
              onNextStep={handleNextStep}
            />
          ) : (
            <ProfileCreation
              isActive={isActive}
              form={form}
              nicknameMsg={nicknameMsg}
            />
          )}
        </form>
      </Form>
    </div>
  );
};

export default AccountRegister;
