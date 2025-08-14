"use client";
import { useNotificationSettingListQueryObject } from "@/app/api/notifications/query";
import { DataTable } from "@/shared/component/Table";
import { useSuspenseQuery } from "@tanstack/react-query";

import { NOTIFICATION_SETTINGS_COLUMNS } from "./constant";
import { tableStyle, tdStyle, theadStyle } from "./index.css";

const NotificationSettingTable = () => {
  const { data: notificationSettingsData } = useSuspenseQuery(
    useNotificationSettingListQueryObject(),
  );

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
