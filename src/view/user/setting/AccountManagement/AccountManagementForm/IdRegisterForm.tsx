import { patchBjNickname } from "@/app/api/users";
import Button from "@/common/component/Button";
import Input from "@/common/component/Input";
import SupportingText from "@/common/component/SupportingText";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { useZodHelper } from "@/shared/hook/useZodHelper";
import { HTTPError } from "ky";
import { type FormEvent, useState } from "react";

import type { z } from "zod";
import {
  registerModalContainerStyle,
  registerModalDescriptionStyle,
  registerModalTextContainerStyle,
} from "./index.css";
import { registerModalHeadingStyle } from "./index.css";
import { formSchema } from "./schema";

type IdRegisterFormProps = {
  onSuccess: (id: string) => void;
};

const IdRegisterForm = ({ onSuccess }: IdRegisterFormProps) => {
  const { showToast } = useToast();
  const [form, setForm] = useState<z.input<typeof formSchema>>({
    bjNickname: "",
  });

  const { result } = useZodHelper(formSchema, form, {
    asyncValidate: true,
  });

  const isInvalid = result?.success === false;

  const errorMessage = result?.error?.issues
    .filter((issue) => issue.code === "custom")
    .at(0)?.message;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isInvalid) return;

    try {
      const response = await patchBjNickname(form.bjNickname);

      if (response.ok) {
        showToast("등록이 완료되었습니다", "success");
        onSuccess(form.bjNickname);
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

  return (
    <form onSubmit={handleSubmit} className={registerModalContainerStyle}>
      <div className={registerModalTextContainerStyle}>
        <h2 className={registerModalHeadingStyle}> 백준 아이디 등록 </h2>
        <p className={registerModalDescriptionStyle}>
          그룹 가입 시 백준 아이디 등록이 필요합니다.
        </p>
      </div>
      <Input
        value={form.bjNickname}
        onChange={(e) =>
          setForm({
            bjNickname: e.target.value,
          })
        }
        type="text"
        placeholder="백준 아이디를 입력해주세요"
      />
      {isInvalid ? (
        <SupportingText isError={true} message={errorMessage} />
      ) : (
        <div style={{ height: "1.5rem", width: "100%" }} />
      )}
      <Button disabled={isInvalid} type="submit" size="medium" color="purple">
        등록하기
      </Button>
    </form>
  );
};

export default IdRegisterForm;
