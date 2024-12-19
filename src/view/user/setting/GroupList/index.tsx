import { useMyGroupSettingsQuery } from "@/app/[user]/setting/query";
import { GroupListTableProvider } from "@/view/user/setting/GroupList/GroupListTable/GroupListProvider";
import {
  backPanelStyle,
  headingStyle,
  wrapperStyle,
} from "@/view/user/setting/index.css";
import GroupListTable from "./GroupListTable";

const GroupList = () => {
  const { data: groupSettingList } = useMyGroupSettingsQuery();

  return (
    <article className={wrapperStyle({ type: "스터디리스트" })}>
      <h1 className={headingStyle}>스터디 관리</h1>
      <div className={backPanelStyle} />
      <GroupListTableProvider data={groupSettingList}>
        <GroupListTable />
      </GroupListTableProvider>
    </article>
  );
};

export default GroupList;
