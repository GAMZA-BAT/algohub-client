"use client";

import Menu from "@/common/component/Menu/Menu";
import Profile from "@/shared/component/Header/Profile";
import { buttonContainer } from "@/shared/component/Header/index.css";
import { useNotificationsQuery } from "@/shared/component/Header/query";
import Notification from "./Notification";

const UserMenu = () => {
  const { data } = useNotificationsQuery();

  /** TODO: 알림 읽음 기능 적용 시 수정 */
  const notiCounts = data.length;

  return (
    <div className={buttonContainer}>
      <Menu
        label="notification"
        renderTriggerButton={<Notification.TriggerButton count={notiCounts} />}
        renderList={<Notification notificationList={data} />}
      />

      <Menu
        label="profileMenu"
        renderTriggerButton={<Profile.TriggerButton />}
        renderList={<Profile />}
      />
    </div>
  );
};

export default UserMenu;
