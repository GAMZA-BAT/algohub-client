import type { NotificationSettingContent } from "@/api/notifications/type";
import { DataTable } from "@/shared/component/Table";
import { NOTIFICATION_SETTINGS_COLUMNS } from "./constant";
import { tableStyle, tdStyle, theadStyle } from "./index.css";

type NotificationSettingTableProps = {
  data: NotificationSettingContent[];
};
const NotificationSettingTable = ({ data }: NotificationSettingTableProps) => {
  return (
    <DataTable
      cols={NOTIFICATION_SETTINGS_COLUMNS}
      rows={data}
      tableClassName={tableStyle}
      theadClassName={theadStyle}
      tdClassName={tdStyle}
    />
  );
};

export default NotificationSettingTable;
