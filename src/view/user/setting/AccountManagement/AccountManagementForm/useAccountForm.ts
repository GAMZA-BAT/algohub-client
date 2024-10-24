import { useToast } from "@/common/hook/useToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { AccountManagementSchema } from "./schema";

const useAccountForm = () => {
  const form = useForm<z.infer<typeof AccountManagementSchema>>({
    resolver: zodResolver(AccountManagementSchema),
    mode: "onChange",
    defaultValues: {
      id: "yerinbaek",
      password: "1234^aaa",
      confirmPassword: "1234^aaa",
    },
  });
  const { showToast } = useToast();

  const handleSubmit = (_values: z.infer<typeof AccountManagementSchema>) => {
    showToast("정상적으로 수정이 되었어요", "success");
  };

  const isActive = form.formState.isDirty && form.formState.isValid;

  return {
    form,
    isActive,
    handleSubmit,
  };
};

export default useAccountForm;
