import { AlarmSettingsData, StudyListData } from "@/shared/constant/example";
import { theme } from "@/styles/themes.css";

import { ALARM_SETTINGS_COLUMNS } from "@/view/user/setting/AlarmSetting/AlarmSettingTable/constant";
import { tdStyle } from "@/view/user/setting/AlarmSetting/AlarmSettingTable/index.css";
import { STUDY_LIST_COLUMNS } from "@/view/user/setting/StudyList/StudyListTable/constant";
import {
  tableCaptionStyle,
  tableStyle,
  theadStyle,
} from "@/view/user/setting/StudyList/StudyListTable/index.css";
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
        rows={StudyListData}
        cols={STUDY_LIST_COLUMNS}
        tableClassName={tableStyle}
        captionClassName={tableCaptionStyle}
        theadClassName={theadStyle}
      />
    );
  },
};

export const AlarmSetting = {
  render: () => {
    return (
      <DataTable
        rows={AlarmSettingsData}
        cols={ALARM_SETTINGS_COLUMNS}
        tableClassName={tableStyle}
        theadClassName={theadStyle}
        tdClassName={tdStyle}
      />
    );
  },
};
