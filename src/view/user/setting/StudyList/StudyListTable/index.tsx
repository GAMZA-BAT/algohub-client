import { DataTable } from "@/shared/component/Table";
import { STUDY_LIST_COLUMNS } from "./constant";
import { useStudyListData } from "./hook";
import { tableCaptionStyle, tableStyle, theadStyle } from "./index.css";

const StudyListTable = () => {
  const data = useStudyListData();

  return (
    <DataTable
      title="스터디 리스트"
      rows={data}
      cols={STUDY_LIST_COLUMNS}
      tableClassName={tableStyle}
      captionClassName={tableCaptionStyle}
      theadClassName={theadStyle}
    />
  );
};

export default StudyListTable;
