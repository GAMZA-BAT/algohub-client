import {
  controllerStyle,
  formContainer,
} from "@/app/signup/components/index.css";
import { FormController } from "@/shared/component/Form";
import SubmitButton from "@/shared/component/SubmitButton";
import { useCheckOnServer } from "@/shared/hook/useCheckOnServer";
import { getBaekjoonIdValidation, getNicknameValidation, handleOnChangeMode } from "@/shared/util/form";
import { fullWidthStyle } from "@/styles/shared.css";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";
import type { baseSignupSchema } from "./schema";

type ProfileCreationProps = {
  form: UseFormReturn<z.infer<typeof baseSignupSchema>>;
};

const ProfileCreation = ({ form }: ProfileCreationProps) => {
  const nickname = form.watch("nickname");
  const baekjoonId = form.watch("baekjoonId");

  const { isNicknameLoading, isBaekjoonIdLoading } = useCheckOnServer(form, nickname, baekjoonId);
  const { isActive, nicknameMsg } = getNicknameValidation(
    form,
    isNicknameLoading,
  );
  const { isActive: isBaekjoonIdActive, baekjoonIdMsg } = getBaekjoonIdValidation(
    form,
    isBaekjoonIdLoading,
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
            className: fullWidthStyle,
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
            size: "large",
          }}
          descriptionProps={{
            showErrorIcon: false,
            message: baekjoonIdMsg,
          }}
          wrapperProps={{
            className: fullWidthStyle,
          }}
        />
      </div>
      <SubmitButton size="large" isActive={isActive && isBaekjoonIdActive}>
        완료
      </SubmitButton>
    </>
  );
};

export default ProfileCreation;
