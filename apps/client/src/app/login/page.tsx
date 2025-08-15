import LoginForm from "@/app/login/components/LoginForm";
import {
  cardStyle,
  containerStyle,
  wrapper,
} from "@/app/login/components/index.css";
import { IcnLogo } from "@/asset/svg";
import ToastProvider from "@/common/component/Toast";
import AuthHeader from "@/shared/component/AuthHeader";
import FormFooter from "@/shared/component/FormFooter";

const LoginPage = () => {
  return (
    <div className={wrapper}>
      <AuthHeader isLoginPage />
      <div className={containerStyle}>
        <IcnLogo width="161px" height="41px" aria-label="algoHub 로고" />
        <div className={cardStyle}>
          <LoginForm />
          <FormFooter
            guideLabel="아직 계정이 없으신가요?"
            link={{ href: "/signup", label: "회원가입하기" }}
          />
        </div>
      </div>
      <ToastProvider />
    </div>
  );
};

export default LoginPage;
