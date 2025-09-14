import { getUserGroupList } from "@/app/api/users";
import { countTextStyle, countWrapper } from "./index.css";

const StudyCount = async () => {
  const myGroups = await getUserGroupList();
  const studyCount = myGroups
    ? Object.values(myGroups).reduce((acc, val) => acc + val.length, 0)
    : 0;

  return (
    <div className={countWrapper}>
      <span className={countTextStyle}>{studyCount}</span>
    </div>
  );
};

export default StudyCount;
