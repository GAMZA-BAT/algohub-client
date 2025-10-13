import RecommendCard from "@/app/[user]/components/RecommendSection/RecommendCard";
import { studyListWrapper } from "@/app/[user]/components/RecommendSection/RecommendList/index.css";
import SearchEmpty from "@/app/[user]/components/RecommendSection/SearchEmpty";
import type { Study } from "@/app/api/groups/type";

type RecommendListProps = {
  studyList: Study[];
};

const RecommendList = ({ studyList }: RecommendListProps) => {
  if (studyList.length === 0) {
    return <SearchEmpty />;
  }

  return (
    <ul className={studyListWrapper}>
      {studyList.map((study) => (
        <li key={study.id}>
          <RecommendCard
            name={study.name}
            introduction={study.introduction}
            groupImage={study.groupImage}
          />
        </li>
      ))}
    </ul>
  );
};

export default RecommendList;
