import { checkEmail } from "@/app/api/users";
import { useCheckOnServer } from "@/shared/hook/useCheckOnServer";
import { signUp } from "@/view/signup/SignupForm/action";
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

  const id = form.watch("id");
  const nickname = form.watch("nickname");
  const backjoonId = form.watch("baekjoonId");

  const { isNicknameLoading, isBaekjoonIdLoading } = useCheckOnServer(
    form,
    nickname,
    backjoonId,
  );
  const { isValid, errors, dirtyFields } = form.formState;

  let idMsg = errors.id?.message || "이메일을 입력해주세요.";

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

  const handleBlurEmail = async () => {
    if (id.length === 0) return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(id)) return;

    try {
      const response = await checkEmail(id);

      if (response.ok) idMsg = "올바른 이메일";
    } catch {
      form.setError("id", {
        message: "이미 사용 중인 이메일입니다.",
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
