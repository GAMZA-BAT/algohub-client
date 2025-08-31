import { getUserGroupList } from "@/app/api/users";
import CountChip from "@/shared/component/CountChip";

const StudyCount = async () => {
  const myGroups = await getUserGroupList();
  const studyCount = myGroups
    ? Object.values(myGroups).reduce((acc, val) => acc + val.length, 0)
    : 0;

  return <CountChip count={studyCount} />;
};

export default StudyCount;
