"use client";
import { signUpAction } from "@/app/api/auth/actions";
import { Form } from "@/shared/component/Form";
import type { signupSchema } from "@/view/signup/AccountRegister/schema";
import { containerStyle } from "@/view/signup/index.css";
import { useState } from "react";
import type { z } from "zod";
import Stepper from "../Stepper";
import { SIGNUP_STEPS } from "../constant";
import PasswordSetup from "./PasswordSetup";
import ProfileCreation from "./ProfileCreation";
import useSignupForm from "./useSignupForm";

const AccountRegister = ({ token }: { token: string }) => {
  const [step, setStep] = useState(SIGNUP_STEPS.PASSWORD_SETUP);
  const { form, passwordError, passwordMsg, nicknameMsg, isActive } =
    useSignupForm();

  const handleNextStep = () => setStep(SIGNUP_STEPS.PROFILE_CREATION);

  const handleSubmit = async (values: z.infer<typeof signupSchema>) => {
    const data = new FormData();

    if (values.profile) {
      data.append("profileImage", values.profile);
    }

    data.append(
      "request",
      JSON.stringify({
        password: values.password,
        nickname: values.nickname,
      }),
    );

    await signUpAction(token, data);
  };

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
    </>
  );
};

export default AccountRegister;
