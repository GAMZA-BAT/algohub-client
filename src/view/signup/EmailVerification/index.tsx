"use client";
import { useVerifyEmailMutation } from "@/app/signup/query";
import Button from "@/common/component/Button";
import { Form, FormController } from "@/shared/component/Form";
import FormFooter from "@/shared/component/FormFooter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
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
    sendEmail(values.email);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        style={{ width: "100%" }}
      >
        <FormController
          form={form}
          name="email"
          type="input"
          showDescription
          fieldProps={{
            placeholder: "이메일을 입력해주세요",
            size: "large",
            // onBlurCapture: handleBlurEmail,
          }}
        />
        {/* <Input placeholder="이메일을 입력해주세요." size="large" /> */}
        <Button type="submit" size="large" style={{ margin: "4rem 0 2.1rem" }}>
          인증 메일 전송
        </Button>
      </form>
      <FormFooter
        guideLabel="이미 계정이 있으신가요?"
        link={{ href: "/login", label: "로그인하기" }}
      />
    </Form>
  );
};

export default EmailVerification;
