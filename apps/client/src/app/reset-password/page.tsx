import { containerStyle, wrapper } from "@/app/login/components/index.css";
import { checkPasswordTokenAction } from "@/app/reset-password/action";
import ResetPassword from "@/app/reset-password/components/ResetPassword";
import SendEmailForResetPW from "@/app/reset-password/components/SendEmailForResetPW";
import AuthHeader from "@/shared/component/AuthHeader";
import { notFound } from "next/navigation";

const ResetPasswordPage = async ({
  searchParams: { token },
}: { searchParams: { token?: string } }) => {
  if (token) {
    try {
      await checkPasswordTokenAction(token);
    } catch (_error) {
      notFound();
    }
  }

  return (
    <div className={wrapper}>
      <AuthHeader isLoginPage hasLogo />
      <div className={containerStyle}>
        {token ? <ResetPassword token={token} /> : <SendEmailForResetPW />}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
