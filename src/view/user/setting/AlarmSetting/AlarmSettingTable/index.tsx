import { DataTable } from "@/shared/component/Table";
import { AlarmSettingsData } from "@/shared/constant/example";
import { ALARM_SETTINGS_COLUMNS } from "./constant";

const AlarmSettingTable = () => {
  return (
    <DataTable
      type="알림설정"
      cols={ALARM_SETTINGS_COLUMNS}
      rows={AlarmSettingsData}
    />
  );
};

export default AlarmSettingTable;
