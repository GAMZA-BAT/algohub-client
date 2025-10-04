"use client";
import { useNotificationsQueryObject } from "@/app/api/notifications/query";
import type { UserResponse } from "@/app/api/users/type";
import Menu from "@/common/component/Menu/Menu";
import Profile from "@/shared/component/Header/Profile";
import { buttonContainer } from "@/shared/component/Header/index.css";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Notification from "./Notification";

const UserMenu = () => {
  const user = useSession().data?.user;
  const { data } = useQuery(useNotificationsQueryObject("ALL"));

  if (!data) return;

  const notiCounts = data.filter((item) => !item.isRead).length;

  return (
    <div className={buttonContainer}>
      <Menu
        label="notification"
        renderTriggerButton={<Notification.TriggerButton count={notiCounts} />}
        renderList={<Notification />}
      />
      <Menu
        label="profileMenu"
        renderTriggerButton={<Profile.TriggerButton src={(user as UserResponse)?.profileImage} />}
        renderList={<Profile />}
      />
    </div>
  );
};

export default UserMenu;
