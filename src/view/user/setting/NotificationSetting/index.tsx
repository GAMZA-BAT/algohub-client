import { useNotificationSettingListQuery } from "@/app/[user]/setting/query";
import { headingStyle, wrapperStyle } from "@/view/user/setting/index.css";
import NotificationSettingTable from "./NotificationSettingTable";

const NotificationSetting = () => {
  const notificationList = useNotificationSettingListQuery();

  return (
    <article className={wrapperStyle({ type: "알림설정" })}>
      <h1 className={headingStyle}>알람 설정</h1>
      <NotificationSettingTable data={notificationList} />
    </article>
  );
};

export default NotificationSetting;
