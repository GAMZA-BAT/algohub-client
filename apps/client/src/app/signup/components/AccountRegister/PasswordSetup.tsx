import Button from "@/common/component/Button";
import { FormController } from "@/shared/component/Form";
import {
  getMultipleRevalidationHandlers,
  getPasswordValidation,
} from "@/shared/util/form";
import clsx from "clsx";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";
import {
  descriptionStyle,
  formContainer,
  passwordMatchStyle,
} from "../SignupForm/index.css";
import type { baseSignupSchema } from "./schema";

type PasswordSetupProps = {
  onNextStep: () => void;
  form: UseFormReturn<z.infer<typeof baseSignupSchema>>;
};

const PasswordSetup = ({ onNextStep, form }: PasswordSetupProps) => {
  const { passwordError, isPasswordMatch, passwordMsg } =
    getPasswordValidation(form);

  return (
    <>
      <div className={formContainer}>
        <FormController
          form={form}
          name="password"
          type="input"
          revalidationHandlers={getMultipleRevalidationHandlers(
            "confirmPassword",
          )}
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
            className: clsx(
              descriptionStyle,
              isPasswordMatch && passwordMatchStyle,
            ),
          }}
        />
      </div>
      {/* step형식이므로 이 단계에서 submit 금지 */}
      <Button
        type="button"
        size="medium"
        onClick={onNextStep}
        isActive={isPasswordMatch}
      >
        다음
      </Button>
    </>
  );
};

export default PasswordSetup;
