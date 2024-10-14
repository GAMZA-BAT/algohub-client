"use client";
import Sidebar from "@/common/component/Sidebar";
import ToastProvider from "@/common/component/Toast";
import { sidebarWrapper } from "@/styles/shared.css";
import SettingStep from "@/view/user/setting/SettingStep";
import MyProfile from "@/view/user/setting/component/MyProfile";
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
        .with("study-setting", () => <></>)
        .with("account-setting", () => <></>)
        .with("alarm-setting", () => <></>)
        .exhaustive()}
    </main>
  );
};

export default UserSettingPage;
