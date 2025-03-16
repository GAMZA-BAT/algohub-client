import AuthHeader from "@/shared/component/AuthHeader";
import { wrapper } from "@/view/login/index.css";
import AccountRegister from "@/view/signup/AccountRegister";
import EmailVerification from "@/view/signup/EmailVerification";
import { getVerifyEmail } from "../api/auth";

const SignupPage = async ({
  searchParams: { token },
}: {
  searchParams: { token?: string };
}) => {
  if (token) {
    await getVerifyEmail(token);
  }
  console.log({ token });

  return (
    <div className={wrapper}>
      <AuthHeader />
      {token ? <AccountRegister token={token} /> : <EmailVerification />}
    </div>
  );
};

export default SignupPage;
