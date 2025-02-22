"use client";
import { FormController } from "@/shared/component/Form";
import SubmitButton from "@/shared/component/SubmitButton";
import { getMultipleRevalidationHandlers } from "@/shared/util/form";
import { resetWrapper, titleTextStyle } from "@/view/reset-password/index.css";
import { passwordWrapper } from "@/view/user/setting/AccountManagement/AccountManagementForm/index.css";
import { resetPasswordSchema } from "@/view/user/setting/AccountManagement/AccountManagementForm/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

const ResetPassword = ({ token }: { token: string }) => {
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
    defaultValues: {
      changePassword: "",
      confirmPassword: "",
    },
  });
  // const { mutate } = usePatchPasswordMutation();

  const handleSubmit = (values: z.infer<typeof resetPasswordSchema>) => {
    // mutate(
    //   {
    //     currentPassword: values.currentPassword,
    //     newPassword: values.changePassword,
    //   },
    //   {
    //     onSuccess: () => {
    //       form.reset({
    //         changePassword: "",
    //         confirmPassword: "",
    //       });
    //     },
    //   },
    // );
  };

  const isActive = form.formState.isDirty && form.formState.isValid;

  return (
    <form className={resetWrapper}>
      <h1 className={titleTextStyle}>비밀번호 재설정</h1>
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
      <SubmitButton
        style={{ marginTop: "2rem" }}
        isActive={isActive}
        disabled={!isActive}
      >
        완료
      </SubmitButton>
    </form>
  );
};

export default ResetPassword;
