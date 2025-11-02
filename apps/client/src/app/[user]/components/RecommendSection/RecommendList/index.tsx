import { studyListWrapper } from "@/app/[user]/components/RecommendSection/RecommendList/index.css";
import SearchEmpty from "@/app/[user]/components/RecommendSection/SearchEmpty";
import type { Study } from "@/app/api/groups/type";
import CardButton from "../../CardButton";

type RecommendListProps = {
  studyList: Study[];
};

const RecommendList = ({ studyList }: RecommendListProps) => {
  if (studyList.length === 0) {
    return <SearchEmpty />;
  }

  return (
    <ul className={studyListWrapper} aria-label="검색된 스터디 목록">
      {studyList.map((study) => (
        <li key={study.id}>
          <CardButton groupInfo={study} />
        </li>
      ))}
    </ul>
  );
};

export default RecommendList;
