import { usePatchPasswordMutation } from "@/app/[user]/setting/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { AccountManagementSchema } from "./schema";

const useAccountForm = () => {
  const form = useForm<z.infer<typeof AccountManagementSchema>>({
    resolver: zodResolver(AccountManagementSchema),
    mode: "onChange",
    defaultValues: {
      currentPassword: "",
      changePassword: "",
      confirmPassword: "",
    },
  });
  const { mutate } = usePatchPasswordMutation();

  const handleSubmit = (values: z.infer<typeof AccountManagementSchema>) => {
    mutate(
      {
        currentPassword: values.currentPassword,
        newPassword: values.changePassword,
      },
      {
        onSuccess: () => {
          form.reset({
            currentPassword: "",
            changePassword: "",
            confirmPassword: "",
          });
        },
      },
    );
  };

  const isActive = form.formState.isDirty && form.formState.isValid;

  return {
    form,
    isActive,
    handleSubmit,
  };
};

export default useAccountForm;
