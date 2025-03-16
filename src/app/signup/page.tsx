"use client";
import AuthHeader from "@/shared/component/AuthHeader";
import { wrapper } from "@/view/login/index.css";
import AccountRegister from "@/view/signup/AccountRegister";
import EmailVerification from "@/view/signup/EmailVerification";

const SignupPage = ({
  searchParams: { token },
}: {
  searchParams: { token?: string };
}) => {
  return (
    <div className={wrapper}>
      <AuthHeader />
      {token ? <AccountRegister /> : <EmailVerification />}
    </div>
  );
};

export default SignupPage;
