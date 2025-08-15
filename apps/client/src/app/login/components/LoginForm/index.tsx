"use client";
import Button from "@/common/component/Button";
import { Form, FormController } from "@/shared/component/Form";
import { buttonStyle } from "@/shared/component/SubmitButton/index.css";
import Link from "next/link";
import { contentStyle, formStyle, resetPwStyle } from "./index.css";
import useLoginForm from "./useLoginForm";

const LoginForm = () => {
  const {
    form,
    isError,
    message,
    descriptionId,
    isActive,
    isPending,
    handleSubmit,
  } = useLoginForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={formStyle}>
        <div className={contentStyle}>
          <FormController
            form={form}
            name="identifier"
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
              id: descriptionId,
            }}
          />
          <Link href="/reset-password">
            <span className={resetPwStyle}>비밀번호를 잊으셨나요?</span>
          </Link>
        </div>
        <Button
          className={buttonStyle}
          type="submit"
          size="medium"
          color="purple"
          disabled={isPending || !isActive}
        >
          로그인
        </Button>
      </form>
    </Form>
  );
};
export default LoginForm;
