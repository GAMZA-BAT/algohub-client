"use client";
import { useVerifyEmailMutation } from "@/app/signup/query";
import { Form, FormController } from "@/shared/component/Form";
import FormFooter from "@/shared/component/FormFooter";
import SubmitButton from "@/shared/component/SubmitButton";
import { getRemainedSeconds } from "@/shared/util/time";
import { fullWidthStyle } from "@/styles/shared.css";
import {
  buttonWrapper,
  timeTextStyle,
  timeWrapper,
} from "@/view/signup/EmailVerification/index.css";
import { containerStyle } from "@/view/signup/index.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
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
  const isSubmit = form.formState.isSubmitted;
  const [time, setTime] = useState(180);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { mutate: sendEmail } = useVerifyEmailMutation();

  const startTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const startTime = Date.now();
    setTime(180);

    intervalRef.current = setInterval(() => {
      const remaining = 180 - Math.floor((Date.now() - startTime) / 1000);
      setTime(Math.max(0, remaining));
      if (remaining <= 0 && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }, 250);
  };

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
            {isSubmit && (
              <p className={timeTextStyle}>{getRemainedSeconds(time)}</p>
            )}
          </div>
          <SubmitButton
            className={buttonWrapper}
            size="large"
            isActive={form.formState.isValid}
          >
            {isSubmit ? "재전송" : "인증 메일 전송"}
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
