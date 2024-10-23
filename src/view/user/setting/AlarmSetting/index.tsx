import { headingStyle, wrapperStyle } from "@/view/user/setting/index.css";
import AlarmSettingTable from "./AlarmSettingTable";

const AlarmSetting = () => {
  return (
    <article className={wrapperStyle({ type: "알림설정" })}>
      <h1 className={headingStyle}>알람 설정</h1>
      <AlarmSettingTable />
    </article>
  );
};

export default AlarmSetting;
