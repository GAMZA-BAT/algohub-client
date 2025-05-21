"use client";
import { useSendEmailForResetPWMutation } from "@/app/reset-password/query";
import Button from "@/common/component/Button";
import Input from "@/common/component/Input";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import {
  descTextStyle,
  resetWrapper,
  titleTextStyle,
} from "@/view/reset-password/index.css";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { HTTPError } from "ky";
import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { match } from "ts-pattern";
import { z } from "zod";
import { errorTextStyle } from "./index.css";

const emailForm = z.object({
  email: z.string().email(),
});

const SendEmailForResetPW = () => {
  const { mutate: sendMutate } = useSendEmailForResetPWMutation();
  const [errorMsg, setErrorMsg] = useState("");

  const form = useForm({
    mode: "onTouched",
    resolver: zodResolver(emailForm),
  });

  const handleSend = () => {
    sendMutate(form.getValues("email"), {
      onError: (error) => {
        if (error instanceof HTTPError) {
          const { status } = error.response;
          match(status)
            .with(HTTP_ERROR_STATUS.NOT_FOUND, () => {
              setErrorMsg("등록되지 않은 이메일입니다.");
            })
            .otherwise(() => {
              setErrorMsg("정상적으로 전송되지 않았습니다.");
            });
        }
      },
    });
  };

  return (
    <div className={resetWrapper}>
      <Form {...form}>
        <h1 className={titleTextStyle}>비밀번호 재설정</h1>
        <Input
          size="large"
          placeholder="이메일"
          {...form.register("email")}
          onChange={(e) => {
            form.register("email").onChange(e);
            if (errorMsg) {
              setErrorMsg("");
            }
          }}
        />
        {errorMsg ? (
          <p className={clsx(errorTextStyle, descTextStyle)}>{errorMsg}</p>
        ) : (
          <p className={descTextStyle}>
            비밀번호 재설정을 위해 회원가입에 사용한 이메일을 입력해주세요
          </p>
        )}
        <Button
          size="large"
          type="button"
          disabled={!form.formState.isValid || !!errorMsg}
          isActive={form.formState.isValid && !errorMsg}
          onClick={handleSend}
        >
          재설정 링크 전송
        </Button>
      </Form>
    </div>
  );
};

export default SendEmailForResetPW;
