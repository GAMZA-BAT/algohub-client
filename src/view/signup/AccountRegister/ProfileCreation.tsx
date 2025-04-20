import Button from "@/common/component/Button";
import { FormController } from "@/shared/component/Form";
import { handleOnChangeMode } from "@/shared/util/form";
import { controllerStyle, formContainer } from "@/view/signup/index.css";
import type { UseFormReturn } from "react-hook-form";

type ProfileCreationProps = {
  isActive: boolean;
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
  nicknameMsg: string;
};

const ProfileCreation = ({
  isActive,
  form,
  nicknameMsg,
}: ProfileCreationProps) => {
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
