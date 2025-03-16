import { signUpAction } from "@/app/api/auth/actions";
import { useCheckOnServer } from "@/shared/hook/useCheckOnServer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { signupSchema } from "./schema";

const defaultMsg = {
  password: "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리",
  nickname: "15자리 이내, 문자/숫자 가능, 특수문자/기호 입력 불가",
  validNickname: "사용가능한 닉네임이에요.",
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

  const passwordMsg = errors.confirmPassword?.message || defaultMsg.password;

  const showNicknameMsg =
    !(errors.nickname || isNicknameLoading) && dirtyFields.nickname;

  const nicknameMsg = isNicknameLoading
    ? defaultMsg.nicknameLoading
    : showNicknameMsg
      ? defaultMsg.validNickname
      : errors.nickname?.message || defaultMsg.nickname;

  const isActive = isValid && !isNicknameLoading;

  const handleSubmit = async (values: z.infer<typeof signupSchema>) => {
    const data = new FormData();

    if (values.profile) {
      data.append("profileImage", values.profile);
    }

    data.append(
      "request",
      JSON.stringify({
        password: values.password,
        nickname: values.nickname,
      }),
    );

    await signUpAction(data);
  };

  return {
    form,
    isActive,
    passwordError,
    passwordMsg,
    nicknameMsg,
    handleSubmit,
  };
};

export default useSignupForm;
