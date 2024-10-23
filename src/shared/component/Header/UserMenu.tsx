"use client";

import Menu from "@/common/component/Menu/Menu";
import Profile from "@/shared/component/Header/Profile";
import { buttonContainer } from "@/shared/component/Header/index.css";
import Alarm from "./Alarm/Alarm";

const UserMenu = () => {
  // TODO: 알림 기능 구현 시 수정
  const count = 10;

  return (
    <div className={buttonContainer}>
      <Menu
        label="alarm"
        renderTriggerButton={<Alarm.TriggerButton count={count} />}
        renderList={<Alarm />}
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
