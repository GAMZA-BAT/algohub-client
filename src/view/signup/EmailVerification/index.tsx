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

const EmailVerification = () => {
  const { mutate: sendEmail } = useVerifyEmailMutation();
  const form = useForm<z.infer<typeof emailVerificationSchema>>({
    resolver: zodResolver(emailVerificationSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof emailVerificationSchema>) => {
    console.log("values.email: ", values.email);
    sendEmail(values.email);
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
          <Button
            type="submit"
            size="large"
            style={{ margin: "4rem 0 2.1rem" }}
          >
            인증 메일 전송
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
