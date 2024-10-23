import { headingStyle } from "@/view/user/setting/index.css";
import AccountManagementForm from "./AccountManagementForm";
import { containerStyle } from "./index.css";

const AccountManagement = () => {
  return (
    <div className={containerStyle}>
      <h1 className={headingStyle}>계정 관리</h1>
      <AccountManagementForm />
    </div>
  );
};

export default AccountManagement;
