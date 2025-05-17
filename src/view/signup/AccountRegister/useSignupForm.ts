import { useCheckOnServer } from "@/shared/hook/useCheckOnServer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { signupSchema } from "./schema";

export const defaultSignupMsg = {
  password: "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리",
  nickname: "15자리 이내, 문자/숫자 가능, 특수문자/기호 입력 불가",
  validNickname: "사용가능한 닉네임이에요.",
  validPassword: "비밀번호가 일치합니다.",
  nicknameLoading: "로딩중",
};

const useSignupForm = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
    defaultValues: {
      password: "",
      profile: null,
      confirmPassword: "",
      nickname: "",
    },
  });

  const nickname = form.watch("nickname");

  const { isNicknameLoading } = useCheckOnServer(form, nickname);
  const { isValid, errors, dirtyFields } = form.formState;

  const passwordError =
    !!errors.password || errors.confirmPassword?.type === "custom";

  const password = form.watch("password");
  const confirmPassword = form.watch("confirmPassword");
  const isPasswordMatch =
    password && confirmPassword && password === confirmPassword;

  const passwordMsg =
    errors.confirmPassword?.message ||
    (isPasswordMatch
      ? defaultSignupMsg.validPassword
      : defaultSignupMsg.password);

  const showNicknameMsg =
    !(errors.nickname || isNicknameLoading) && dirtyFields.nickname;

  const nicknameMsg = isNicknameLoading
    ? defaultSignupMsg.nicknameLoading
    : showNicknameMsg
      ? defaultSignupMsg.validNickname
      : errors.nickname?.message || defaultSignupMsg.nickname;

  const isActive = isValid && !isNicknameLoading;

  return {
    form,
    isActive,
    passwordError,
    passwordMsg,
    nicknameMsg,
  };
};

export default useSignupForm;
