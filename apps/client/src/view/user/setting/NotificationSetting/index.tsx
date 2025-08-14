import { usePvEvent } from "@/shared/hook/usePvEvent";
import { headingStyle, wrapperStyle } from "@/view/user/setting/index.css";
import UserSettingLoading from "@/view/user/setting/loading";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import NotificationSettingTable from "./NotificationSettingTable";

const NotificationSetting = () => {
  const params = useParams();
  const userId = Array.isArray(params.user) ? params.user[0] : params.user;

  usePvEvent("user_setting_notification_setting_page_view", {
    user_id: userId ?? "",
  });

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
