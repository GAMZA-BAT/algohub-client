import { signUpAction } from "@/app/api/auth/actions";
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
  baekjoonLoading: "로딩중",
  validBaekjoonId: "정상적으로 연동되었어요.",
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
      baekjoonId: "",
    },
  });

  const _handleSubmit = async (
    token: string,
    values: z.infer<typeof signupSchema>,
  ) => {
    const data = new FormData();

    if (values.profile) {
      data.append("profileImage", values.profile);
    }

    data.append(
      "request",
      JSON.stringify({
        password: values.password,
        nickname: values.nickname,
        baekjoonId: values.baekjoonId,
      }),
    );

    await signUpAction(token, data);
  };

  return {
    form,
    _handleSubmit,
  };
};

export default useSignupForm;
