import { Form, FormController } from "@/shared/component/Form";
import SubmitButton from "@/view/index/component/SubmitButton";
import useLoginForm from "../../hook/useLoginForm";
import { contentStyle, formStyle } from "./index.css";

const LoginForm = () => {
  const { form, isError, message, isActive, handleSubmit, handleClick } =
    useLoginForm();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={formStyle}>
        <div className={contentStyle}>
          <FormController
            form={form}
            name="id"
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
            }}
          />
        </div>
        <SubmitButton isActive={isActive} onClick={handleClick}>
          로그인하기
        </SubmitButton>
      </form>
    </Form>
  );
};
export default LoginForm;
