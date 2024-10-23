import { DataTable } from "@/shared/component/Table";
import { STUDY_LIST_COLUMNS } from "./constant";
import { useStudyListData } from "./hook";

const StudyListTable = () => {
  const data = useStudyListData();

  return (
    <DataTable
      title="스터디 리스트"
      type="스터디리스트"
      rows={data}
      cols={STUDY_LIST_COLUMNS}
    />
  );
};

export default StudyListTable;
