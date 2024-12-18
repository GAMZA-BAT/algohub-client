"use client";
import { Form, FormController } from "@/shared/component/Form";
import SubmitButton from "@/shared/component/SubmitButton";
import { contentStyle, formStyle } from "./index.css";
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
            showDescription
            descriptionPosition="top"
            descriptionProps={{
              isError,
              message,
            }}
          />
          <FormController
            form={form}
            name="password"
            type="input"
            fieldProps={{
              placeholder: "비밀번호",
              type: "password",
            }}
          />
        </div>
        <SubmitButton
          isActive={isActive}
          disabled={isPending}
          onClick={handleClick}
        >
          로그인하기
        </SubmitButton>
      </form>
    </Form>
  );
};
export default LoginForm;
