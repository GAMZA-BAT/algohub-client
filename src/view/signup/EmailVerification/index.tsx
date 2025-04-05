"use client";
import { useVerifyEmailMutation } from "@/app/signup/query";
import Button from "@/common/component/Button";
import { Form, FormController } from "@/shared/component/Form";
import FormFooter from "@/shared/component/FormFooter";
import { containerStyle } from "@/view/signup/index.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import Stepper from "../Stepper";
import emailVerificationSchema from "./schema";
import { timeTextStyle, timeWrapper } from "@/view/signup/EmailVerification/index.css";
import { useEffect, useRef, useState } from "react";

const EmailVerification = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [time, setTime] = useState(180);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { mutate: sendEmail } = useVerifyEmailMutation();
  const form = useForm<z.infer<typeof emailVerificationSchema>>({
    resolver: zodResolver(emailVerificationSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    if (isSubmit && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current as NodeJS.Timeout);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isSubmit, time]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleSubmit = (values: z.infer<typeof emailVerificationSchema>) => {
    sendEmail(values.email, {
      onSuccess: () => {
        setIsSubmit(true);
        setTime(180);
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
                style: { width: "100%" },
              }}
              />
              {isSubmit && <p className={timeTextStyle}>{formatTime(time)}</p>}
          </div>
          <Button
            type="submit"
            size="large"
            style={{ margin: "4rem 0 2.1rem" }}
          >
            {isSubmit ? "재전송" : "인증 메일 전송"}
          </Button>
          <FormFooter
            variant="signup"
            guideLabel="이미 계정이 있으신가요?"
            link={{ href: "/login", label: "로그인하기" }}
          />
        </form>
      </Form>
    </>
  );
};

export default EmailVerification;
