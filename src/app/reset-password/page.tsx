import AuthHeader from "@/shared/component/AuthHeader";
import { containerStyle, wrapper } from "@/view/login/index.css";
import ResetPassword from "@/view/reset-password/ResetPassword";
import SendEmailForResetPW from "@/view/reset-password/SendEmailForResetPW";

const ResetPasswordPage = ({
  searchParams: { token },
}: { searchParams: { token?: string } }) => {
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
