"use client";
import { containerStyle } from "@/app/signup/components/index.css";
import { Form } from "@/shared/component/Form";
import { useState } from "react";
import Stepper from "../Stepper";
import { SIGNUP_STEPS } from "../constant";
import PasswordSetup from "./PasswordSetup";
import ProfileCreation from "./ProfileCreation";
import useSignupForm from "./useSignupForm";

const AccountRegister = ({ token }: { token: string }) => {
  const { form, _handleSubmit } = useSignupForm();
  const [step, setStep] = useState(SIGNUP_STEPS.PASSWORD_SETUP);

  const handleNextStep = () => setStep(SIGNUP_STEPS.PROFILE_CREATION);
  const handleSubmit = _handleSubmit.bind(this, token);

  return (
    <>
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
            <PasswordSetup form={form} onNextStep={handleNextStep} />
          ) : (
            <ProfileCreation form={form} />
          )}
        </form>
      </Form>
    </>
  );
};

export default AccountRegister;
