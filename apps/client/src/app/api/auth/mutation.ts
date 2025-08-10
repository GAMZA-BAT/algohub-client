import { patchResetPasswordAction } from "@/app/reset-password/action";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { useMutation } from "@tanstack/react-query";
import type { HTTPError } from "ky";
import { useRouter } from "next/navigation";
import { postEmailForResetPassword, postVerifyEmail } from "./index";
import type { resetPasswordRequest } from "./type";

export const useVerifyEmailMutation = () => {
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (email: string) => postVerifyEmail(email),
    onSuccess: () => {
      showToast("메일함을 확인해주세요.", "success");
    },
    onError: (error: HTTPError) => {
      const { status } = error.response;
      switch (status) {
        case HTTP_ERROR_STATUS.BAD_REQUEST:
          showToast("이미 사용중인 이메일입니다.", "error");
          break;
        default:
          showToast("정상적으로 전송되지 않았습니다.", "error");
      }
    },
  });
};

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
