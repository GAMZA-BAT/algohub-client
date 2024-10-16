import AccountManagementForm from "../AccountManagementForm";
import { headingStyle } from "../index.css";
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
