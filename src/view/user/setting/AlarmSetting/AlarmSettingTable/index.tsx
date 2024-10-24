import { DataTable } from "@/shared/component/Table";
import { AlarmSettingsData } from "@/shared/constant/example";
import { ALARM_SETTINGS_COLUMNS } from "./constant";
import { tableStyle, tdStyle, theadStyle } from "./index.css";

const AlarmSettingTable = () => {
  return (
    <DataTable
      cols={ALARM_SETTINGS_COLUMNS}
      rows={AlarmSettingsData}
      tableClassName={tableStyle}
      theadClassName={theadStyle}
      tdClassName={tdStyle}
    />
  );
};

export default AlarmSettingTable;
