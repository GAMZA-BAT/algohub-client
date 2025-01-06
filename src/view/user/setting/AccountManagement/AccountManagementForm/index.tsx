import { Form, FormController } from "@/shared/component/Form";
import SubmitButton from "@/shared/component/SubmitButton";
import { getMultipleRevalidationHandlers } from "@/shared/util/form";
import { formStyle, labelStyle, passwordWrapper, width } from "./index.css";
import useAccountForm from "./useAccountForm";

const AccountManagementForm = () => {
  const { form, isActive, handleSubmit } = useAccountForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={formStyle}>
        <FormController
          form={form}
          name="currentPassword"
          type="input"
          showLabel
          labelProps={{ children: "비밀번호 변경", className: labelStyle }}
          fieldProps={{
            placeholder: "기존 비밀번호",
            className: width,
            type: "password",
          }}
        />
        <div className={passwordWrapper}>
          <FormController
            form={form}
            type="input"
            name="changePassword"
            revalidationHandlers={getMultipleRevalidationHandlers(
              "confirmPassword",
            )}
            showDescription
            fieldProps={{
              placeholder: "변경할 비밀번호",
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
