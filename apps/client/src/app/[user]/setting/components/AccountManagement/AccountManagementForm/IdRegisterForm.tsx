import { postBjNickname } from "@/app/api/users";
import { useToast } from "@/common/hook/useToast";
import { Form, FormController } from "@/shared/component/Form";
import SubmitButton from "@/shared/component/SubmitButton";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { fullWidthStyle } from "@/styles/shared.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTTPError } from "ky";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import {
  registerModalContainerStyle,
  registerModalDescriptionStyle,
  registerModalHeadingStyle,
  registerModalTextContainerStyle,
} from "./index.css";
import { IdRegisterFormSchema } from "./schema";

type IdRegisterFormProps = {
  onSuccess: (id: string) => void;
};

const IdRegisterForm = ({ onSuccess }: IdRegisterFormProps) => {
  const { showToast } = useToast();

  const form = useForm<z.infer<typeof IdRegisterFormSchema>>({
    resolver: zodResolver(IdRegisterFormSchema),
    mode: "onChange",
    defaultValues: {
      bjNickname: "",
    },
  });

  const handleSubmit = async ({
    bjNickname,
  }: z.infer<typeof IdRegisterFormSchema>) => {
    try {
      const response = await postBjNickname(bjNickname);

      if (response.ok) {
        showToast("등록이 완료되었습니다", "success");
        onSuccess(bjNickname);
      }
    } catch (error) {
      if (error instanceof HTTPError) {
        switch (error.response.status) {
          case HTTP_ERROR_STATUS.NOT_FOUND:
            showToast("등록되지 않은 아이디입니다", "error");
            break;
          default:
            showToast("정상적으로 등록되지 않았습니다", "error");
            break;
        }
      }
    }
  };

  const isActive = form.formState.isDirty && form.formState.isValid;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={registerModalContainerStyle}
      >
        <div className={registerModalTextContainerStyle}>
          <h2 className={registerModalHeadingStyle}>백준 아이디 등록</h2>
          <p className={registerModalDescriptionStyle}>
            그룹 가입 시 백준 아이디 등록이 필요합니다.
          </p>
        </div>
        <FormController
          form={form}
          type="input"
          name="bjNickname"
          showDescription
          fieldProps={{
            placeholder: "백준 아이디를 입력해주세요",
          }}
        />
        <SubmitButton
          disabled={!isActive}
          isActive={isActive}
          className={fullWidthStyle}
        >
          등록하기
        </SubmitButton>
      </form>
    </Form>
  );
};

export default IdRegisterForm;
