import { DataTable } from "@/shared/component/Table";
import { NotificationSettingsData } from "@/shared/constant/example";
import { NOTIFICATION_SETTINGS_COLUMNS } from "./constant";
import { tableStyle, tdStyle, theadStyle } from "./index.css";

const NotificationSettingTable = () => {
  return (
    <DataTable
      cols={NOTIFICATION_SETTINGS_COLUMNS}
      rows={NotificationSettingsData}
      tableClassName={tableStyle}
      theadClassName={theadStyle}
      tdClassName={tdStyle}
    />
  );
};

export default NotificationSettingTable;
