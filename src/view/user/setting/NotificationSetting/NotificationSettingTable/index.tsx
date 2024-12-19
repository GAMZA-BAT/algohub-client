"use client";
import { useNotificationSettingListQuery } from "@/app/[user]/setting/query";
import { DataTable } from "@/shared/component/Table";
import { NOTIFICATION_SETTINGS_COLUMNS } from "./constant";
import { tableStyle, tdStyle, theadStyle } from "./index.css";

const NotificationSettingTable = () => {
  const { data: notificationSettingsData } = useNotificationSettingListQuery();

  return (
    <DataTable
      cols={NOTIFICATION_SETTINGS_COLUMNS}
      rows={notificationSettingsData}
      tableClassName={tableStyle}
      theadClassName={theadStyle}
      tdClassName={tdStyle}
    />
  );
};

export default NotificationSettingTable;
