import { headingStyle, wrapperStyle } from "@/view/user/setting/index.css";
import UserSettingLoading from "@/view/user/setting/loading";
import { Suspense } from "react";
import NotificationSettingTable from "./NotificationSettingTable";

const NotificationSetting = () => {
  return (
    <article className={wrapperStyle({ type: "알림설정" })}>
      <h1 className={headingStyle}>알람 설정</h1>
      <Suspense fallback={<UserSettingLoading />}>
        <NotificationSettingTable />
      </Suspense>
    </article>
  );
};

export default NotificationSetting;
