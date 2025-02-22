import { sendEmailForResetPWAction } from "@/app/reset-password/action";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { useMutation } from "@tanstack/react-query";
import type { HTTPError } from "ky";

export const useSendEmailForResetPWMutation = () => {
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (email: string) => sendEmailForResetPWAction(email),
    onSuccess: () => {
      showToast("이메일을 확인해주세요.", "success");
    },
    onError: (error: HTTPError) => {
      const { status } = error.response;

      switch (status) {
        case HTTP_ERROR_STATUS.NOT_FOUND:
          showToast("존재하지 않는 이메일의 유저입니다.", "error");
          break;
        default:
          showToast("정상적으로 전송되지 않았습니다.", "error");
      }
    },
  });
};
