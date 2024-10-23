import { IcnAlarm, IcnPencil, IcnSetting, IcnSquare } from "@/asset/svg";
import { theme } from "@/styles/themes.css";
import {
  barStyle,
  btnStyle,
  itemStyle,
  texStyle,
  wrapper,
} from "@/view/user/setting/SettingStep/index.css";
import type { SettingSteps } from "@/view/user/setting/type";
import type { Dispatch, SetStateAction } from "react";
import { match } from "ts-pattern";

type SettingStepProps = {
  step: SettingSteps;
  setStep: Dispatch<SetStateAction<SettingSteps>>;
};
const SettingStep = ({ step, setStep }: SettingStepProps) => {
  const steps = [
    { type: "my-profile", label: "내 프로필", Icon: IcnSquare },
    { type: "study-setting", label: "스터디 관리", Icon: IcnPencil },
    { type: "account-setting", label: "계정 관리", Icon: IcnSetting },
    { type: "alarm-setting", label: "알람 설정", Icon: IcnAlarm },
  ];

  return (
    <ul className={wrapper}>
      {steps.map(({ type, label, Icon }) => {
        const isActive = step === type;
        const color = match(isActive)
          .with(true, () => theme.color.white)
          .with(false, () => theme.color.mg2)
          .run();
        return (
          <li key={type} className={itemStyle}>
            {isActive && <div className={barStyle} />}
            <button
              className={btnStyle}
              onClick={() => setStep(type as SettingSteps)}
            >
              {type === "alarm-setting" ? (
                <Icon fill={color} width={16} height={16} />
              ) : (
                <Icon color={color} width={16} height={16} />
              )}
              <p className={texStyle({ isActive })}>{label}</p>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default SettingStep;
