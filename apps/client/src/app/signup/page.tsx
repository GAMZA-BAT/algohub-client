import { wrapper } from "@/app/login/components/index.css";
import AccountRegister from "@/app/signup/components/AccountRegister";
import EmailVerification from "@/app/signup/components/EmailVerification";
import AuthHeader from "@/shared/component/AuthHeader";
import { getVerifyEmail } from "../api/auth";

const SignupPage = async ({
  searchParams: { token },
}: {
  searchParams: { token?: string };
}) => {
  if (token) {
    await getVerifyEmail(token);
  }

  return (
    <div className={wrapper}>
      <AuthHeader />
      {token ? <AccountRegister token={token} /> : <EmailVerification />}
    </div>
  );
};

export default SignupPage;
