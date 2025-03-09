import Button from "@/common/component/Button";
import Input from "@/common/component/Input";
import FormFooter from "@/shared/component/FormFooter";

const EmailVerification = () => {
  return (
    <>
      <Input placeholder="이메일을 입력해주세요." size="large" />
      <Button size="large" style={{ margin: "4rem 0 2.1rem" }}>
        인증 메일 전송
      </Button>
      <FormFooter
        guideLabel="이미 계정이 있으신가요?"
        link={{ href: "/login", label: "로그인하기" }}
      />
    </>
  );
};

export default EmailVerification;
