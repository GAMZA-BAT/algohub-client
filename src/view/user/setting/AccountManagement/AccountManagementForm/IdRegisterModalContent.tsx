import Button from "@/common/component/Button";
import Input from "@/common/component/Input";
import { useState } from "react";
import {
  registerModalContainerStyle,
  registerModalDescriptionStyle,
} from "./index.css";
import { registerModalHeadingStyle } from "./index.css";

const IdRegisterModalContent = () => {
  const [id, setId] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /** api request */
    console.log(id);
  };

  return (
    <form onSubmit={handleSubmit} className={registerModalContainerStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
          marginBottom: "0.4rem",
        }}
      >
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

export default IdRegisterModalContent;
