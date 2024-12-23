"use client";

import Sidebar from "@/common/component/Sidebar";
import ToastProvider from "@/common/component/Toast";
import { sidebarWrapper } from "@/styles/shared.css";
import AccountManagement from "@/view/user/setting/AccountManagement";
import GroupList from "@/view/user/setting/GroupList";
import MyProfile from "@/view/user/setting/MyProfile";
import NotificationSetting from "@/view/user/setting/NotificationSetting";
import SettingStep from "@/view/user/setting/SettingStep";
import type { SettingSteps } from "@/view/user/setting/type";
import { useState } from "react";

const UserSettingPage = () => {
  const [step, setStep] = useState<SettingSteps>("my-profile");

  return (
    <main className={sidebarWrapper}>
      <ToastProvider />
      <Sidebar>
        <SettingStep step={step} setStep={setStep} />
      </Sidebar>
      {(() => {
        switch (step) {
          case "my-profile":
            return <MyProfile />;
          case "study-setting":
            return <GroupList />;
          case "account-setting":
            return <AccountManagement />;
          case "notification-setting":
            return <NotificationSetting />;
        }
      })()}
    </main>
  );
};

export default UserSettingPage;
