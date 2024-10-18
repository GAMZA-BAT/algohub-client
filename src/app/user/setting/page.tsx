"use client";
import Sidebar from "@/common/component/Sidebar";
import ToastProvider from "@/common/component/Toast";
import { sidebarWrapper } from "@/styles/shared.css";
import AccountManagement from "@/view/user/setting/AccountManagement";
import AlarmSetting from "@/view/user/setting/AlarmSetting";
import MyProfile from "@/view/user/setting/MyProfile";
import SettingStep from "@/view/user/setting/SettingStep";
import StudyList from "@/view/user/setting/StudyList";
import type { SettingSteps } from "@/view/user/setting/type";
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
        .with("study-setting", () => <StudyList />)
        .with("account-setting", () => <AccountManagement />)
        .with("alarm-setting", () => <AlarmSetting />)
        .exhaustive()}
    </main>
  );
};

export default UserSettingPage;
