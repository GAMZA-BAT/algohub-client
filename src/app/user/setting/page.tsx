"use client";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import SettingStep from "@/view/user/setting/SettingStep";
import StudyList from "@/view/user/setting/StudyList";
import type { SettingSteps } from "@/view/user/setting/type";
import { useState } from "react";
import { match } from "ts-pattern";

const UserSettingPage = () => {
  const [step, setStep] = useState<SettingSteps>("my-profile");
  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <SettingStep step={step} setStep={setStep} />
      </Sidebar>
      {match(step)
        .with("my-profile", () => <></>)
        .with("study-setting", () => <StudyList />)
        .with("account-setting", () => <></>)
        .with("alarm-setting", () => <></>)
        .exhaustive()}
    </main>
  );
};

export default UserSettingPage;
