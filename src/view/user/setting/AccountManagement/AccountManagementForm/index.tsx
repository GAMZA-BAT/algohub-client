import { Form, FormController } from "@/shared/component/Form";
import { getMultipleRevalidationHandlers } from "@/shared/util/form";
import SubmitButton from "@/view/index/SubmitButton";
import { formStyle, labelStyle, passwordWrapper, width } from "./index.css";
import useAccountForm from "./useAccountForm";

const AccountManagementForm = () => {
  const { form, isActive, handleSubmit } = useAccountForm();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={formStyle}>
        <FormController
          form={form}
          name="id"
          type="input"
          showLabel
          labelProps={{ children: "아이디", className: labelStyle }}
          fieldProps={{
            placeholder: "아이디",
            className: width,
          }}
        />
        <div className={passwordWrapper}>
          <FormController
            form={form}
            type="input"
            name="password"
            revalidationHandlers={getMultipleRevalidationHandlers(
              "confirmPassword",
            )}
            showLabel
            labelProps={{ children: "비밀번호", className: labelStyle }}
            fieldProps={{
              placeholder: "비밀번호",
              type: "password",
            }}
          />
          <FormController
            form={form}
            type="input"
            name="confirmPassword"
            revalidationHandlers={getMultipleRevalidationHandlers("password")}
            showDescription
            fieldProps={{
              placeholder: "비밀번호 확인",
              type: "password",
            }}
          />
        </div>
        <SubmitButton isActive={isActive} disabled={!isActive}>
          수정하기
        </SubmitButton>
      </form>
    </Form>
  );
};

export default AccountManagementForm;
