import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { setAccessToken } from "@/shared/util/token";
import { useMutation } from "@tanstack/react-query";
import type { HTTPError } from "ky";
import { signOut } from "next-auth/react";
import { deleteMe, patchMyInfo, patchPassword } from "./index";
import type { DeleteUserRequest, PasswordRequest } from "./type";

export const useDeleteMeMutation = () => {
  const { showToast } = useToast();

  return useMutation({
    mutationFn: ({ password, isOAuthAccount }: DeleteUserRequest) =>
      deleteMe({ password, isOAuthAccount }),
    onSuccess: async () => {
      showToast("정상적으로 계정이 삭제되었습니다.", "success");
      setAccessToken("");
      await signOut({
        redirectTo: "/",
      });
    },
  });
};

export const usePatchPasswordMutation = () => {
  const { showToast } = useToast();

  return useMutation({
    mutationFn: ({ currentPassword, newPassword }: PasswordRequest) =>
      patchPassword({ currentPassword, newPassword }),
    onSuccess: async () => {
      showToast("비밀번호가 변경되었습니다.", "success");
    },
    onError: (error: HTTPError) => {
      const { status } = JSON.parse(error.message);
      switch (status) {
        case HTTP_ERROR_STATUS.BAD_REQUEST: {
          showToast("비밀번호가 일치하지 않습니다.", "error");
          break;
        }
        default: {
          showToast("비밀번호가 정상적으로 변경되지 않았습니다.", "error");
        }
      }
    },
  });
};

export const usePatchMyInfoMutation = () => {
  return useMutation({
    mutationFn: (formData: FormData) => patchMyInfo(formData),
  });
};
