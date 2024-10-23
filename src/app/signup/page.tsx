import AuthHeader from "@/shared/component/AuthHeader";
import FormFooter from "@/shared/component/FormFooter";
import { wrapper } from "@/view/login/index.css";
import SignupForm from "@/view/signup/SignupForm";
import { containerStyle } from "@/view/signup/index.css";

const SignupPage = () => {
  return (
    <div className={wrapper}>
      <AuthHeader />
      <div className={containerStyle}>
        <SignupForm />
        <FormFooter
          guideLabel="이미 계정이 있으신가요?"
          link={{ href: "/login", label: "로그인하기" }}
        />
      </div>
    </div>
  );
};

export default SignupPage;
