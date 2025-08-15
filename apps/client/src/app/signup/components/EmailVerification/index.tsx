"use client";
import { useVerifyEmailMutation } from "@/app/api/auth/mutation";
import {
  buttonWrapper,
  timeTextStyle,
  timeWrapper,
} from "@/app/signup/components/EmailVerification/index.css";
import { containerStyle } from "@/app/signup/components/index.css";
import { useTimer } from "@/common/hook/useTimer";
import { Form, FormController } from "@/shared/component/Form";
import FormFooter from "@/shared/component/FormFooter";
import SubmitButton from "@/shared/component/SubmitButton";
import { getRemainedSeconds } from "@/shared/util/time";
import { fullWidthStyle } from "@/styles/shared.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import Stepper from "../Stepper";
import emailVerificationSchema from "./schema";

const EmailVerification = () => {
  const form = useForm<z.infer<typeof emailVerificationSchema>>({
    resolver: zodResolver(emailVerificationSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
    },
  });
  const { time, startTimer } = useTimer(180);
  const { mutate: sendEmail, isSuccess } = useVerifyEmailMutation();

  const handleSubmit = (values: z.infer<typeof emailVerificationSchema>) => {
    sendEmail(values.email, {
      onSuccess: () => {
        startTimer();
      },
    });
  };

  return (
    <>
      <Stepper
        curStep={0}
        stepName={["메일 인증", "비밀번호 설정", "프로필 생성"]}
      />
      <Form {...form}>
        <form
          className={containerStyle}
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className={timeWrapper}>
            <FormController
              form={form}
              name="email"
              type="input"
              showDescription
              fieldProps={{
                placeholder: "이메일을 입력해주세요",
                size: "large",
                className: fullWidthStyle,
              }}
            />
            {isSuccess && (
              <p className={timeTextStyle}>{getRemainedSeconds(time)}</p>
            )}
          </div>
          <SubmitButton
            className={buttonWrapper}
            size="large"
            isActive={form.formState.isValid}
          >
            {isSuccess ? "재전송" : "인증 메일 전송"}
          </SubmitButton>
        </form>
      </Form>
      <FormFooter
        variant="signup"
        guideLabel="이미 계정이 있으신가요?"
        link={{ href: "/login", label: "로그인하기" }}
      />
    </>
  );
};

export default EmailVerification;
