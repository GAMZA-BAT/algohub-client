"use client";

import { Form, FormController } from "@/shared/component/Form";
import {
  getMultipleRevalidationHandlers,
  handleOnChangeMode,
} from "@/shared/util/form";

import SubmitButton from "@/shared/component/SubmitButton";
import {
  contentStyle,
  descriptionStyle,
  formContainer,
  formStyle,
} from "./index.css";
import useSignupForm from "./useSignupForm";

const SignupForm = () => {
  const {
    form,
    handleSubmit,
    idMsg,
    passwordError,
    passwordMsg,
    nicknameMsg,
    bjMsg,
    isActive,
  } = useSignupForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={formStyle}>
        <div className={contentStyle}>
          <FormController form={form} name="profile" type="image" />
          <div className={formContainer}>
            <FormController
              form={form}
              name="id"
              type="input"
              showDescription
              fieldProps={{
                placeholder: "아이디",
              }}
              descriptionProps={{
                showErrorIcon: false,
                message: idMsg,
                className: descriptionStyle,
              }}
            />
          </div>

          <div className={formContainer}>
            <FormController
              form={form}
              name="password"
              type="input"
              fieldProps={{
                placeholder: "비밀번호",
                type: "password",
                "aria-describedby": "password-description",
              }}
            />
            <FormController
              form={form}
              name="confirmPassword"
              type="input"
              showDescription
              revalidationHandlers={getMultipleRevalidationHandlers("password")}
              fieldProps={{
                placeholder: "비밀번호 확인",
                type: "password",
                "aria-describedby": "password-description",
              }}
              descriptionProps={{
                showErrorIcon: false,
                id: "password-description",
                isError: passwordError,
                message: passwordMsg,
                className: descriptionStyle,
              }}
            />
          </div>

          <div className={formContainer}>
            <FormController
              form={form}
              name="nickname"
              type="input"
              showDescription
              revalidationHandlers={handleOnChangeMode}
              fieldProps={{
                placeholder: "닉네임",
              }}
              descriptionProps={{
                showErrorIcon: false,
                message: nicknameMsg,
                className: descriptionStyle,
              }}
            />
            <FormController
              form={form}
              name="baekjoonId"
              type="input"
              showDescription
              revalidationHandlers={handleOnChangeMode}
              fieldProps={{
                placeholder: "백준 아이디",
              }}
              descriptionProps={{
                showErrorIcon: false,
                message: bjMsg,
                className: descriptionStyle,
              }}
            />
          </div>
        </div>
        <SubmitButton isActive={isActive}>가입하기</SubmitButton>
      </form>
    </Form>
  );
};
export default SignupForm;
