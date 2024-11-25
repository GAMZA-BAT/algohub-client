import { headingStyle, wrapperStyle } from "@/view/user/setting/index.css";
import NotificationSettingTable from "./NotificationSettingTable";

const NotificationSetting = () => {
  return (
    <article className={wrapperStyle({ type: "알림설정" })}>
      <h1 className={headingStyle}>알람 설정</h1>
      <NotificationSettingTable />
    </article>
  );
};

export default NotificationSetting;
