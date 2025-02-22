import { checkPasswordTokenAction } from "@/app/reset-password/action";
import AuthHeader from "@/shared/component/AuthHeader";
import { containerStyle, wrapper } from "@/view/login/index.css";
import ResetPassword from "@/view/reset-password/ResetPassword";
import SendEmailForResetPW from "@/view/reset-password/SendEmailForResetPW";
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
        {token ? <ResetPassword /> : <SendEmailForResetPW />}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
