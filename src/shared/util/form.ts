import type { ChangeEvent } from "react";
import type {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";

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
      onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      field.onChange(e);
      trigger(name);
    },
  };
};
