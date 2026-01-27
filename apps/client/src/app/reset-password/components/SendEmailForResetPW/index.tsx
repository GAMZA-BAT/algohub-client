"use client";
import { useSendEmailForResetPWMutation } from "@/app/api/auth/mutation";
import {
  resetWrapper,
  titleTextStyle,
} from "@/app/reset-password/components/index.css";
import { Form, FormController } from "@/shared/component/Form";
import SubmitButton from "@/shared/component/SubmitButton";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTTPError } from "ky";
import { useForm } from "react-hook-form";
import { match } from "ts-pattern";
import type { z } from "zod";
import { emailSchema } from "./schema";

const SendEmailForResetPW = () => {
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });
  const { mutate: sendMutate } = useSendEmailForResetPWMutation();

  const errorMsg = form.formState.errors.email?.message;
  const isActive = form.formState.isValid;

  const handleSubmit = ({ email }: z.infer<typeof emailSchema>) => {
    sendMutate(email, {
      onError: (error) => {
        if (error instanceof HTTPError) {
          const { status } = error.response;

          match(status)
            .with(HTTP_ERROR_STATUS.NOT_FOUND, () => {
              form.setError("email", {
                message: "등록되지 않은 이메일입니다.",
              });
            })
            .otherwise(() => {
              form.setError("email", {
                message: "정상적으로 전송되지 않았습니다.",
              });
            });
        }
      },
    });
  };

  return (
    <Form {...form}>
      <form className={resetWrapper} onSubmit={form.handleSubmit(handleSubmit)}>
        <h1 className={titleTextStyle}>비밀번호 재설정</h1>
        <FormController
          form={form}
          type="input"
          name="email"
          showDescription
          fieldProps={{
            placeholder: "이메일",
            size: "large",
          }}
          descriptionProps={{
            message:
              errorMsg ||
              "비밀번호 재설정을 위해 회원가입에 사용한 이메일을 입력해주세요",
            isError: !!form.formState.errors.email,
          }}
        />
        <SubmitButton disabled={!isActive} isActive={isActive}>
          재설정 링크 전송
        </SubmitButton>
      </form>
    </Form>
  );
};

export default SendEmailForResetPW;
