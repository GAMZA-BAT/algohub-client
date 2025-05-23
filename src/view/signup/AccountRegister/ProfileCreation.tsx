import Button from "@/common/component/Button";
import { FormController } from "@/shared/component/Form";
import { useCheckOnServer } from "@/shared/hook/useCheckOnServer";
import { getNicknameValidation, handleOnChangeMode } from "@/shared/util/form";
import { controllerStyle, formContainer } from "@/view/signup/index.css";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";
import type { baseSignupSchema } from "./schema";

type ProfileCreationProps = {
  form: UseFormReturn<z.infer<typeof baseSignupSchema>>;
};

const ProfileCreation = ({ form }: ProfileCreationProps) => {
  const nickname = form.watch("nickname");

  const { isNicknameLoading } = useCheckOnServer(form, nickname);
  const { isActive, nicknameMsg } = getNicknameValidation(
    form,
    isNicknameLoading,
  );
  return (
    <>
      <div className={formContainer}>
        <div className={controllerStyle}>
          <FormController form={form} name="profile" type="image" />
        </div>
        <FormController
          form={form}
          name="nickname"
          type="input"
          showDescription
          revalidationHandlers={handleOnChangeMode}
          fieldProps={{
            placeholder: "닉네임",
            size: "large",
          }}
          descriptionProps={{
            showErrorIcon: false,
            message: nicknameMsg,
          }}
          wrapperProps={{
            style: { width: "100%" },
          }}
        />
      </div>
      <Button type="submit" size="large" isActive={isActive}>
        완료
      </Button>
    </>
  );
};

export default ProfileCreation;
