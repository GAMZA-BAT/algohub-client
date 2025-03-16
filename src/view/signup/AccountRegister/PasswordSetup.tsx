import Button from "@/common/component/Button";
import { FormController } from "@/shared/component/Form";
import { getMultipleRevalidationHandlers } from "@/shared/util/form";
import type { UseFormReturn } from "react-hook-form";
import { descriptionStyle, formContainer } from "../SignupForm/index.css";

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
      <Button
        style={{ marginTop: "4rem" }}
        type="button"
        size="large"
        onClick={onNextStep}
      >
        다음
      </Button>
    </>
  );
};

export default PasswordSetup;
