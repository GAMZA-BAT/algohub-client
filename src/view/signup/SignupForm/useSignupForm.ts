import { checkEmail } from "@/app/api/users";
import { signUp } from "@/app/signup/action";
import { useCheckOnServer } from "@/shared/hook/useCheckOnServer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { signupSchema } from "./schema";

const defaultMsg = {
  email: "이메일을 입력해주세요.",
  validEmail: "올바른 이메일",
  usedEmail: "이미 사용 중인 이메일입니다.",
  password: "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리",
  nickname: "15자리 이내, 문자/숫자 가능, 특수문자/기호 입력 불가",
  validNickname: "사용가능한 닉네임이에요.",
  nicknameLoading: "로딩중",
  baekjoonLoading: "로딩중",
  validBaekjoonId: "정상적으로 연동되었어요.",
};

const useSignupForm = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
    defaultValues: {
      profile: null,
      id: "",
      password: "",
      confirmPassword: "",
      nickname: "",
      baekjoonId: "",
    },
  });

  const id = form.watch("id");
  const nickname = form.watch("nickname");
  const backjoonId = form.watch("baekjoonId");

  const { isNicknameLoading, isBaekjoonIdLoading } = useCheckOnServer(
    form,
    nickname,
    backjoonId,
  );
  const { isValid, errors, dirtyFields } = form.formState;

  let idMsg = errors.id?.message || defaultMsg.email;

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

  const showBjMsg =
    !(errors.baekjoonId || isBaekjoonIdLoading) && dirtyFields.baekjoonId;

  const bjMsg = isBaekjoonIdLoading
    ? defaultMsg.baekjoonLoading
    : showBjMsg
      ? defaultMsg.validBaekjoonId
      : errors.baekjoonId?.message;

  const isActive = isValid && !isNicknameLoading && !isBaekjoonIdLoading;

  const handleBlurEmail = async () => {
    if (id.length === 0) return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(id)) return;

    try {
      const response = await checkEmail(id);

      if (response.ok) idMsg = defaultMsg.validEmail;
    } catch {
      form.setError("id", {
        message: defaultMsg.usedEmail,
      });
    }
  };

  const handleSubmit = async (values: z.infer<typeof signupSchema>) => {
    const data = new FormData();

    if (values.profile) {
      data.append("profileImage", values.profile);
    }

    data.append(
      "request",
      JSON.stringify({
        email: values.id,
        password: values.password,
        nickname: values.nickname,
        bjNickname: values.baekjoonId,
      }),
    );

    signUp(data);
  };

  return {
    form,
    isActive,
    idMsg,
    passwordError,
    passwordMsg,
    nicknameMsg,
    bjMsg,
    handleBlurEmail,
    handleSubmit,
  };
};

export default useSignupForm;
