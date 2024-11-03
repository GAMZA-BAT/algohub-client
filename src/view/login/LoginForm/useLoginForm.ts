import { loginAction } from "@/api/user/actions";
import { useToast } from "@/common/hook/useToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession, useSession } from "next-auth/react";
import { useTransition } from "react";
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
  const [isPending, startTransition] = useTransition();
  const { showToast } = useToast();
  const session = useSession();

  const isError = !!Object.keys(form.formState.errors).length;
  const message = isError ? loginSchemaMessage : undefined;
  const isActive = form.formState.isValid;

  const handleSubmit = (values: z.infer<typeof loginSchema>) => {
    startTransition(async () => {
      await loginAction(values);
      await session.update(await getSession());
    });
  };
  const handleClick = () => {
    if (!form.formState.isValid) showToast(loginSchemaMessage, "error");
  };

  return {
    form,
    isError,
    message,
    isActive,
    isPending,
    handleSubmit,
    handleClick,
  };
};

export default useLoginForm;
