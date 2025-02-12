import { IcnLogo } from "@/asset/svg";
import ToastProvider from "@/common/component/Toast";
import AuthHeader from "@/shared/component/AuthHeader";
import Card from "@/shared/component/Card";
import FormFooter from "@/shared/component/FormFooter";
import LoginForm from "@/view/login/LoginForm";
import { containerStyle, wrapper } from "@/view/login/index.css";

const LoginPage = () => {
  return (
    <div className={wrapper}>
      <AuthHeader isLoginPage />
      <div className={containerStyle}>
        <IcnLogo width="161px" height="41px" aria-label="algoHub 로고" />
        <Card>
          <LoginForm />
          <FormFooter
            guideLabel="아직 계정이 없으신가요?"
            link={{ href: "/signup", label: "회원가입하기" }}
          />
        </Card>
      </div>
      <ToastProvider />
    </div>
  );
};

export default LoginPage;
