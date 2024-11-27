import { validateBojNickname, validateNickname } from "@/api/users";
import { baseSignupSchema } from "@/view/signup/SignupForm/schema";
import { useEffect, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";

export const useCheckOnServer = (
  form: UseFormReturn<z.infer<typeof baseSignupSchema>>,
  nickname: string,
  baekjoonId: string,
) => {
  const [isNicknameLoading, setNicknameLoading] = useState(false);
  const [isBaekjoonIdLoading, setBaekjoonIdLoading] = useState(false);

  const handleValidation = async (
    fieldName: "nickname" | "baekjoonId",
    value: string,
    validateFn: typeof validateNickname | typeof validateBojNickname,
    loadingSetter: (value: boolean) => void,
  ) => {
    if (!value.length) {
      form.clearErrors(fieldName);
      return;
    }
    const parseResult = baseSignupSchema.partial().safeParse({
      [fieldName]: value,
    });
    if (!parseResult.success) {
      form.setError(fieldName, parseResult.error);
      return;
    }

    const checkOnServer = async () => {
      const res = await validateFn(value);

      // 비동기 처리 완료 전에 입력이 다 지워졌을 경우
      if (!form.getValues(fieldName).length) {
        form.setError(fieldName, {
          message: `${fieldName === "nickname" ? "닉네임" : "백준 아이디"}를 확인해주세요.`,
          type: "custom",
        });
        loadingSetter(false);
        return;
      }

      if (res) {
        form.clearErrors(fieldName);
      } else {
        form.setError(fieldName, {
          message: `${fieldName === "nickname" ? "중복된 닉네임이에요." : "유효하지 않은 닉네임이에요."}`,
          type: "custom",
        });
      }
      loadingSetter(false);
    };

    loadingSetter(true);
    checkOnServer();
  };

  useEffect(() => {
    handleValidation(
      "nickname",
      nickname,
      validateNickname,
      setNicknameLoading,
    );
  }, [nickname]);

  useEffect(() => {
    handleValidation(
      "baekjoonId",
      baekjoonId,
      validateBojNickname,
      setBaekjoonIdLoading,
    );
  }, [baekjoonId]);

  return { isNicknameLoading, isBaekjoonIdLoading };
};
