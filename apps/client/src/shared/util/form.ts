import type { baseSignupSchema } from "@/app/signup/components/AccountRegister/schema";
import { defaultSignupMsg } from "@/app/signup/components/AccountRegister/useSignupForm";
import type { ChangeEvent } from "react";
import type {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";
import type { z } from "zod";

/**
 * 비밀번호 확인처럼 여러 필드의 유효성 검사를 한번에 하는 handlers를 반환하는 함수
 * @param otherFieldNames 자신을 제외하고 같이 검사할 필드들의 name
 */
export const getMultipleRevalidationHandlers =
  <
    TFieldValues extends FieldValues,
    TFieldName extends FieldPath<TFieldValues>,
  >(
    ...otherFieldNames: TFieldName[]
  ) =>
  (form: UseFormReturn, field: ControllerRenderProps) => {
    const { trigger } = form;
    const { name } = field;
    const fieldNames = [name, ...otherFieldNames];
    return {
      onBlur: () => {
        field.onBlur();
        trigger(fieldNames);
      },
      onChange: (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | Date,
      ) => {
        field.onChange(e);
        trigger(fieldNames);
      },
    };
  };

/**
 * 매 입력마다 서버에서 결과를 받아야 하는 필드에 대해 * onChange로 유효성 검사하게 만드는 handler를 반환하는 함수
 */
export const handleOnChangeMode = (
  form: UseFormReturn,
  field: ControllerRenderProps,
) => {
  const {
    trigger,
    formState: { errors },
  } = form;
  const { name } = field;

  return {
    onBlur: () => {
      if (errors[name]?.type === "custom") return;
      field.onBlur();
      trigger(name);
    },
    onChange: (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | Date,
    ) => {
      field.onChange(e);
      trigger(name);
    },
  };
};

type ValueType = string | File | boolean | null | Date;
export const createFormDataFromDirtyFields = <T extends z.ZodRawShape>(
  dirtyFields: Record<string, boolean>,
  values: z.infer<z.ZodObject<T>>,
): FormData => {
  const data = new FormData();

  const withoutImageField = Object.entries(values).reduce(
    (acc, [key, value]) => {
      if (key.includes("Image")) {
        return acc;
      }
      acc[key] = value;
      return acc;
    },
    {} as Record<string, ValueType>,
  );

  const requestData = Object.entries(dirtyFields).reduce(
    (acc, [key, isDirty]) => {
      if (!isDirty) return acc;

      const value = values[key] as ValueType;

      /** 이미지가 수정됐는데 값이 있으면 기본이미지 X / 값이 없으면 기본이미지 O */
      if (key.includes("Image")) {
        acc.isDefaultImage = !value;
      } else if (value instanceof Date) {
        acc[key] = value.toISOString().slice(0, 10);
      } else {
        acc[key] = value;
      }

      return acc;
    },
    { isDefaultImage: false } as Record<string, ValueType>,
  );

  /** 중복 허용하지 않는 nickname 필드는 dirty하지 않을 시 formData에서 제거 */
  if (!Object.hasOwn(dirtyFields, "nickname") && values.nickname) {
    withoutImageField.nickname = null;
  }

  data.append(
    "request",
    JSON.stringify({ ...requestData, ...withoutImageField }),
  );
  return data;
};

export const getPasswordValidation = (
  form: UseFormReturn<z.infer<typeof baseSignupSchema>>,
) => {
  const { errors } = form.formState;
  const [password, confirmPassword] = form.watch([
    "password",
    "confirmPassword",
  ]);

  const passwordError =
    !!errors.password || errors.confirmPassword?.type === "custom";
  const isPasswordMatch = Boolean(
    password && confirmPassword && password === confirmPassword,
  );
  const passwordMsg =
    errors.confirmPassword?.message ||
    (isPasswordMatch
      ? defaultSignupMsg.validPassword
      : defaultSignupMsg.password);

  return {
    passwordError,
    isPasswordMatch,
    passwordMsg,
  };
};

export const getNicknameValidation = (
  form: UseFormReturn<z.infer<typeof baseSignupSchema>>,
  isNicknameLoading: boolean,
) => {
  const {
    errors: { nickname: nicknameError },
    dirtyFields: { nickname: nicknameDirty },
    isValid,
  } = form.formState;

  const isNicknameValid = Boolean(
    !(nicknameError || isNicknameLoading) && nicknameDirty,
  );

  const nicknameMsg = (() => {
    if (isNicknameLoading) return defaultSignupMsg.nicknameLoading;
    if (isNicknameValid) return defaultSignupMsg.validNickname;
    return nicknameError?.message ?? defaultSignupMsg.nickname;
  })();

  const isActive = !isNicknameLoading && isValid;

  return {
    nicknameMsg,
    isActive,
  };
};

export const getBaekjoonIdValidation = (
  form: UseFormReturn<z.infer<typeof baseSignupSchema>>,
  isBaekjoonIdLoading: boolean,
) => {
  const {
    errors: { baekjoonId: baekjoonIdError },
    dirtyFields: { baekjoonId: baekjoonIdDirty },
    isValid,
  } = form.formState;

  const isBaekjoonIdValid = Boolean(
    !(baekjoonIdError || isBaekjoonIdLoading) && baekjoonIdDirty,
  );

  const baekjoonIdMsg = (() => {
    if (isBaekjoonIdLoading) return defaultSignupMsg.baekjoonLoading;
    if (isBaekjoonIdValid) return defaultSignupMsg.validBaekjoonId;
    return baekjoonIdError?.message;
  })();

  const isActive = !isBaekjoonIdLoading && isValid;

  return {
    baekjoonIdMsg,
    isActive,
  };
};
