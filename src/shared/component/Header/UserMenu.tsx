"use client";
import type { UserResponse } from "@/app/api/users/type";
import { useNotificationsQuery } from "@/app/query";
import Menu from "@/common/component/Menu/Menu";
import Profile from "@/shared/component/Header/Profile";
import { buttonContainer } from "@/shared/component/Header/index.css";
import { useSession } from "next-auth/react";
import Notification from "./Notification";

const UserMenu = () => {
  const { data } = useNotificationsQuery();
  const user = useSession().data?.user;

  const notiCounts = data.filter((item) => !item.isRead).length;

  return (
    <div className={buttonContainer}>
      <Menu
        label="notification"
        renderTriggerButton={<Notification.TriggerButton count={notiCounts} />}
        renderList={<Notification notificationList={data} />}
      />
      <Menu
        label="profileMenu"
        renderTriggerButton={
          <Profile.TriggerButton src={(user as UserResponse)?.profileImage} />
        }
        renderList={<Profile />}
      />
    </div>
  );
};

export default UserMenu;
