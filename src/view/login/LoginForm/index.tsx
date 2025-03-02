"use client";
import { Form, FormController } from "@/shared/component/Form";
import SubmitButton from "@/shared/component/SubmitButton";
import Link from "next/link";
import { contentStyle, formStyle, resetPwStyle } from "./index.css";
import useLoginForm from "./useLoginForm";

const LoginForm = () => {
  const {
    form,
    isError,
    message,
    isActive,
    isPending,
    handleSubmit,
    handleClick,
  } = useLoginForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={formStyle}>
        <div className={contentStyle}>
          <FormController
            form={form}
            name="email"
            type="input"
            fieldProps={{
              placeholder: "아이디",
            }}
          />
          <FormController
            form={form}
            name="password"
            type="input"
            showDescription
            fieldProps={{
              placeholder: "비밀번호",
              type: "password",
            }}
            descriptionProps={{
              isError,
              message,
            }}
          />
          <Link href="/reset-password">
            <span className={resetPwStyle}>비밀번호를 잊으셨나요?</span>
          </Link>
        </div>
        <SubmitButton
          isActive={isActive}
          disabled={isPending}
          onClick={handleClick}
        >
          로그인
        </SubmitButton>
      </form>
    </Form>
  );
};
export default LoginForm;
