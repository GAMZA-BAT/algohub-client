import { loginAction } from "@/api/user/actions";
import { useToast } from "@/common/hook/useToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { loginSchema, loginSchemaMessage } from "./schema";

const useLoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { showToast } = useToast();

  const isError = !!Object.keys(form.formState.errors).length;
  const message = isError ? loginSchemaMessage : undefined;
  const isActive = form.formState.isValid;

  const handleSubmit = (values: z.infer<typeof loginSchema>) => {
    loginAction(values);
  };
  const handleClick = () => {
    if (!form.formState.isValid) showToast(loginSchemaMessage, "error");
  };

  return {
    form,
    isError,
    message,
    isActive,
    handleSubmit,
    handleClick,
  };
};

export default useLoginForm;
