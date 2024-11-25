import { useGetMyGroupsQuery } from "@/view/user/setting/StudyList/query";
import {
  backPanelStyle,
  headingStyle,
  wrapperStyle,
} from "@/view/user/setting/index.css";
import StudyListTable from "./StudyListTable";
import { StudyListTableProvider } from "./StudyListTable/StudyListProvider";

const StudyList = () => {
  const { data: studyList } = useGetMyGroupsQuery();

  return (
    <article className={wrapperStyle({ type: "스터디리스트" })}>
      <h1 className={headingStyle}>스터디 관리</h1>
      <div className={backPanelStyle} />
      <StudyListTableProvider data={studyList}>
        <StudyListTable />
      </StudyListTableProvider>
    </article>
  );
};

export default StudyList;
