import { patchBjNickname } from "@/app/api/users";
import Button from "@/common/component/Button";
import Input from "@/common/component/Input";
import { useToast } from "@/common/hook/useToast";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { HTTPError } from "ky";
import {} from "next-auth/react";
import { useState } from "react";
import {
  registerModalContainerStyle,
  registerModalDescriptionStyle,
  registerModalTextContainerStyle,
} from "./index.css";
import { registerModalHeadingStyle } from "./index.css";

type Props = {
  onSuccess: (id: string) => void;
};

const IdRegisterForm = ({ onSuccess }: Props) => {
  const [id, setId] = useState("");
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await patchBjNickname(id);

      if (response.ok) {
        showToast("등록이 완료되었습니다", "success");
        onSuccess(id);
      }
    } catch (error) {
      if (error instanceof HTTPError) {
        switch (error.response.status) {
          case HTTP_ERROR_STATUS.NOT_FOUND:
            showToast("등록되지 않은 아이디입니다", "error");
            break;
          default:
            showToast("등록에 실패하였어요", "error");
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
        onChange={(e) => setId(e.target.value)}
        type="text"
        placeholder="백준 아이디를 입력해주세요"
      />
      <Button type="submit" size="medium" color="purple">
        등록하기
      </Button>
    </form>
  );
};

export default IdRegisterForm;
