import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { useMutation } from "@tanstack/react-query";
import type { HTTPError } from "ky";
import { postVerifyEmail } from "../api/auth";

export const useVerifyEmailMutation = () => {
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (email: string) => postVerifyEmail(email),
    onSuccess: () => {
      showToast("이메일을 확인해주세요.", "success");
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
