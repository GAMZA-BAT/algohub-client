import { useCheckOnServer } from "@/shared/hook/useCheckOnServer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { signupSchema } from "./schema";

const useSignupForm = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
    defaultValues: {
      profile: "",
      id: "",
      password: "",
      confirmPassword: "",
      nickname: "",
      baekjoonId: "",
    },
  });
  const nickname = form.watch("nickname");
  const backjoonId = form.watch("baekjoonId");
  const { isNicknameLoading, isBaekjoonIdLoading } = useCheckOnServer(
    form,
    nickname,
    backjoonId,
  );
  const { isValid, errors, dirtyFields } = form.formState;

  const idMsg = "영문 소문자 또는 영문 대문자, 숫자 조합 6~12 자리";

  const passwordError =
    !!errors.password || errors.confirmPassword?.type === "custom";
  const passwordMsg =
    errors.confirmPassword?.message ||
    "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리";

  const showNicknameMsg =
    !(errors.nickname || isNicknameLoading) && dirtyFields.nickname;
  const nicknameMsg = isNicknameLoading
    ? "로딩중"
    : showNicknameMsg
      ? "사용가능한 닉네임이에요."
      : errors.nickname?.message;

  const showBjMsg =
    !(errors.baekjoonId || isBaekjoonIdLoading) && dirtyFields.baekjoonId;
  const bjMsg = isBaekjoonIdLoading
    ? "로딩중"
    : showBjMsg
      ? "정상적으로 연동되었어요."
      : errors.baekjoonId?.message;

  const isActive = isValid && !isNicknameLoading && !isBaekjoonIdLoading;

  const handleSubmit = (_values: z.infer<typeof signupSchema>) => {
    // console.log({ values, profile });
  };

  return {
    form,
    isActive,
    idMsg,
    passwordError,
    passwordMsg,
    nicknameMsg,
    bjMsg,
    handleSubmit,
  };
};

export default useSignupForm;
