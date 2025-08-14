import { usePvEvent } from "@/shared/hook/usePvEvent";
import AccountManagementForm from "@/view/user/setting/AccountManagement/AccountManagementForm";
import { labelStyle } from "@/view/user/setting/AccountManagement/AccountManagementForm/index.css";
import {
  containerStyle,
  emailStyle,
} from "@/view/user/setting/AccountManagement/index.css";
import { headingStyle } from "@/view/user/setting/index.css";
import { useSession } from "next-auth/react";

const AccountManagement = () => {
  const session = useSession();
  const user = session.data?.user;

  usePvEvent("user_setting_account_management_page_view", {
    user_id: user?.id ?? "",
  });

  return (
    <div className={containerStyle}>
      <h1 className={headingStyle}>계정 관리</h1>
      <h2 className={labelStyle}>계정</h2>
      <p className={emailStyle}>{user?.email}</p>
      <AccountManagementForm />
    </div>
  );
};

export default AccountManagement;
