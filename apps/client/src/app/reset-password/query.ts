import type { resetPasswordRequest } from "@/app/api/auth/type";
import { patchResetPasswordAction } from "@/app/reset-password/action";
import { useToast } from "@/common/hook/useToast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { postEmailForResetPassword } from "../api/auth";

export const useSendEmailForResetPWMutation = () => {
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (email: string) => postEmailForResetPassword(email),
    onSuccess: () => {
      showToast("메일함을 확인해주세요.", "success");
    },
  });
};

export const useResetPasswordMutation = () => {
  const { showToast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: ({ token, password }: resetPasswordRequest) =>
      patchResetPasswordAction({ token, password }),
    onSuccess: async () => {
      showToast("비밀번호가 변경되었습니다.", "success");
      router.push("/login");
    },
    onError: (error: Error) => {
      showToast(error.message, "error");
      router.push("/reset-password");
    },
  });
};
