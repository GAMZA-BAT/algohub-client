import { checkPasswordTokenAction } from "@/app/reset-password/action";
import AuthHeader from "@/shared/component/AuthHeader";
import { containerStyle, wrapper } from "@/view/login/index.css";
import ResetPassword from "@/view/reset-password/ResetPassword";
import SendEmailForResetPW from "@/view/reset-password/SendEmailForResetPW";

const ResetPasswordPage = async ({
  searchParams: { token },
}: { searchParams: { token?: string } }) => {
  if (token) {
    try {
      const response = await checkPasswordTokenAction(token);
      console.log({ response });
    } catch (_error) {
      console.log("notFound 시킬거야");
      // notFound();
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
