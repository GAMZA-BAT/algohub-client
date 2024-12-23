import { headingStyle, wrapperStyle } from "@/view/user/setting/index.css";
import { Suspense } from "react";
import NotificationSettingTable from "./NotificationSettingTable";

const NotificationSetting = () => {
  return (
    <article className={wrapperStyle({ type: "알림설정" })}>
      <h1 className={headingStyle}>알람 설정</h1>
      <Suspense>
        <NotificationSettingTable />
      </Suspense>
    </article>
  );
};

export default NotificationSetting;
