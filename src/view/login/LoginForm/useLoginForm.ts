import { loginAction } from "@/app/api/auth/actions";
import { useTrack } from "@/shared/hook/useTrack";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { loginSchema } from "./schema";

const useLoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: {
      identifier: "",
      password: "",
    },
  });
  const [isPending, startTransition] = useTransition();
  const session = useSession();
  const router = useRouter();
  const { track } = useTrack();

  const errors = Object.keys(form.formState.errors);
  const isError = !!errors;
  const message =
    form.formState.errors.password?.message ||
    form.formState.errors.identifier?.message;
  const descriptionId = `${errors[0]}-description`;
  const isActive = form.formState.isValid;

  const handleSubmit = (values: z.infer<typeof loginSchema>) => {
    startTransition(async () => {
      const data = await loginAction(values);

      if (data?.error) {
        form.setError(
          data.msg?.error.includes("비밀번호") ? "password" : "identifier",
          { message: data.msg?.error },
        );
        return;
      }

      const newSession = await getSession();
      if (newSession) {
        session.update(newSession);
        router.push(`/${newSession?.user?.nickname}`);
      }
      track("login_cta_button_click");
    });
  };

  return {
    form,
    isError,
    message,
    descriptionId,
    isActive,
    isPending,
    handleSubmit,
  };
};

export default useLoginForm;
