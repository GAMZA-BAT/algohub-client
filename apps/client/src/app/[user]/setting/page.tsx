"use client";

import AccountManagement from "@/app/[user]/setting/components/AccountManagement";
import GroupList from "@/app/[user]/setting/components/GroupList";
import MyProfile from "@/app/[user]/setting/components/MyProfile";
import NotificationSetting from "@/app/[user]/setting/components/NotificationSetting";
import SettingStep from "@/app/[user]/setting/components/SettingStep";
import type { SettingSteps } from "@/app/[user]/setting/components/type";
import Sidebar from "@/common/component/Sidebar";
import ToastProvider from "@/common/component/Toast";
import { sidebarWrapper } from "@/styles/shared.css";
import { useState } from "react";
import { match } from "ts-pattern";

const UserSettingPage = () => {
  const [step, setStep] = useState<SettingSteps>("my-profile");

  return (
    <main className={sidebarWrapper}>
      <ToastProvider />
      <Sidebar>
        <SettingStep step={step} setStep={setStep} />
      </Sidebar>
      {match(step)
        .with("my-profile", () => <MyProfile />)
        .with("study-setting", () => <GroupList />)
        .with("account-setting", () => <AccountManagement />)
        .with("notification-setting", () => <NotificationSetting />)
        .exhaustive()}
    </main>
  );
};

export default UserSettingPage;
