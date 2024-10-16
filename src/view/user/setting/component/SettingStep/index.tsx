import { IcnAlarm, IcnPencil, IcnSetting, IcnSquare } from "@/asset/svg";
import { theme } from "@/styles/themes.css";
import {
  barStyle,
  itemStyle,
  texStyle,
  wrapper,
} from "@/view/user/setting/component/SettingStep/index.css";
import type { SettingSteps } from "@/view/user/setting/type";
import type { Dispatch, SetStateAction } from "react";

type SettingStepProps = {
  step: SettingSteps;
  setStep: Dispatch<SetStateAction<SettingSteps>>;
};
const SettingStep = ({ step, setStep }: SettingStepProps) => {
  const activeColor = theme.color.white;
  const inactiveColor = theme.color.mg2;
  const isMyProfile = step === "my-profile";
  const isStudySetting = step === "study-setting";
  const isAccountSetting = step === "account-setting";
  const isAlarmSetting = step === "alarm-setting";

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
    }
  };
  return (
    <div className={wrapper}>
      <div
        className={itemStyle}
        role="button"
        onClick={() => setStep("my-profile")}
        onKeyUp={handleKeyUp}
        tabIndex={0}
      >
        {isMyProfile && <hr className={barStyle} />}
        <IcnSquare
          color={isMyProfile ? activeColor : inactiveColor}
          width={16}
          height={16}
        />
        <p className={texStyle({ isActive: isMyProfile })}>내 프로필</p>
      </div>
      <div
        className={itemStyle}
        role="button"
        onClick={() => setStep("study-setting")}
        onKeyUp={handleKeyUp}
      >
        {isStudySetting && <hr className={barStyle} />}
        <IcnPencil
          color={isStudySetting ? activeColor : inactiveColor}
          width={16}
          height={16}
        />
        <p className={texStyle({ isActive: isStudySetting })}>스터디 관리</p>
      </div>
      <div
        className={itemStyle}
        role="button"
        onClick={() => setStep("account-setting")}
        onKeyUp={handleKeyUp}
      >
        {isAccountSetting && <hr className={barStyle} />}
        <IcnSetting
          color={isAccountSetting ? activeColor : inactiveColor}
          width={16}
          height={16}
        />
        <p className={texStyle({ isActive: isAccountSetting })}>계정 관리</p>
      </div>
      <div
        className={itemStyle}
        role="button"
        onClick={() => setStep("alarm-setting")}
        onKeyUp={handleKeyUp}
      >
        {isAlarmSetting && <hr className={barStyle} />}
        <IcnAlarm
          fill={isAlarmSetting ? activeColor : inactiveColor}
          width={16}
          height={16}
        />
        <p className={texStyle({ isActive: isAlarmSetting })}>알람 설정</p>
      </div>
    </div>
  );
};

export default SettingStep;
