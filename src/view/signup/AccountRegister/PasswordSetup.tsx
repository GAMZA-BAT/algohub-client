import Button from "@/common/component/Button";
import { FormController } from "@/shared/component/Form";
import { getMultipleRevalidationHandlers } from "@/shared/util/form";
import type { UseFormReturn } from "react-hook-form";
import { descriptionStyle, formContainer } from "../SignupForm/index.css";
import { passwordCheckSchema } from "./schema";

type PasswordSetupProps = {
  passwordError: boolean;
  passwordMsg: string;
  onNextStep: () => void;
  form: UseFormReturn<
    {
      password: string;
      confirmPassword: string;
      nickname: string;
      profile: string | File | null;
    },
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    any,
    undefined
  >;
};

const PasswordSetup = ({
  passwordError,
  passwordMsg,
  onNextStep,
  form,
}: PasswordSetupProps) => {
  const { password, confirmPassword } = form.getValues();
  const { success } = passwordCheckSchema.safeParse({
    password,
    confirmPassword,
  });
  return (
    <>
      <div className={formContainer}>
        <FormController
          form={form}
          name="password"
          type="input"
          fieldProps={{
            placeholder: "비밀번호",
            type: "password",
            "aria-describedby": "password-description",
            size: "large",
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
            size: "large",
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
      {/* 중간 단계이므로 submit 금지 */}
      <Button
        type="button"
        size="medium"
        onClick={onNextStep}
        isActive={success}
      >
        다음
      </Button>
    </>
  );
};

export default PasswordSetup;
