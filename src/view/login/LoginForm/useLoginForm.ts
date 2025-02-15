import { loginAction } from "@/app/api/auth/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
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
  const session = useSession();
  const router = useRouter();

  const isError = !!Object.keys(form.formState.errors).length;
  const message = isError ? loginSchemaMessage : undefined;
  const isActive = form.formState.isValid;

  const handleSubmit = (values: z.infer<typeof loginSchema>) => {
    startTransition(async () => {
      const data = await loginAction(values);

      console.log({ data });
      if (data?.error) {
        form.setError("email", { message: data.error });
        return;
      }

      const newSession = await getSession();
      if (newSession) {
        session.update(newSession);
        router.push(`/${newSession?.user?.nickname}`);
      }
    });
  };

  const handleClick = () => {
    if (!form.formState.isValid)
      form.setError("email", {
        message: "아이디 혹은 비밀번호를 확인해주세요",
      });
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
