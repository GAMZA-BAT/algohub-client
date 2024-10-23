import { validateNickname } from "@/api/validate";
import { baseSignupSchema } from "@/view/signup/SignupForm/schema";
import { useEffect, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";

// TODO: API연결 후 useQuery로 교체하며 동일하게 기능 적용하기
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
    validateFn: typeof validateNickname,
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
          message: `${fieldName === "nickname" ? "중복된 닉네임이에요." : "이미 등록된 아이디에요."}`,
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
      validateNickname,
      setBaekjoonIdLoading,
    );
  }, [baekjoonId]);

  return { isNicknameLoading, isBaekjoonIdLoading };
};
