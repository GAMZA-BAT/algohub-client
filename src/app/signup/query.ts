import { useMutation } from "@tanstack/react-query";
import { postVerifyEmail } from "../api/auth";
import { useToast } from "@/common/hook/useToast";
import { HTTPError } from "ky";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";

export const useSendEmailMutation = () => {
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (email: string) => postVerifyEmail(email),
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
