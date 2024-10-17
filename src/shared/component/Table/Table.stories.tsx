import { StudyListData, alarmSettingsData } from "@/shared/constant/example";
import { theme } from "@/styles/themes.css";

import { STUDY_LIST_COLUMNS } from "@/view/user/setting/StudyList/StudyListTable/constant";
import { ALARM_SETTINGS_COLUMNS } from "@/view/user/setting/constant";
import type { Meta } from "@storybook/react";
import { DataTable } from ".";

const meta: Meta<typeof DataTable> = {
  title: "Shared/Table",
  component: DataTable,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/PBHmaVSKndAId6lY6G2qEb/AlgoHub?node-id=491-25321&t=kXe0v1ggMwRlTf9d-4",
    },
  },
  tags: ["autodocs"],
  decorators: (Story) => (
    <div style={{ backgroundColor: theme.color.bg }}>
      <Story />
    </div>
  ),
} satisfies Meta<typeof DataTable>;
export default meta;

export const StudyList = {
  render: () => {
    return (
      <DataTable
        title="스터디 리스트"
        type="스터디리스트"
        rows={StudyListData}
        cols={STUDY_LIST_COLUMNS}
      />
    );
  },
};

export const AlarmSetting = {
  render: () => {
    return (
      <DataTable
        type="알림설정"
        rows={alarmSettingsData}
        cols={ALARM_SETTINGS_COLUMNS}
      />
    );
  },
};
