import SearchEmpty from "@/app/[user]/components/RecommendSection/SearchEmpty";
import RecommendCard from "@/app/[user]/components/RecommendSection/RecommendCard";
import { studyListWrapper } from "@/app/[user]/components/RecommendSection/RecommendList/index.css";
import type { Study } from "@/app/api/groups/type";

type RecommendListProps = {
  studyList: Study[];
};

const RecommendList = ({ studyList }: RecommendListProps) => {
  return (
    <>
      {studyList && studyList.length > 0 ? (
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
      ) : (
        <SearchEmpty />
      )}
    </>
  );
};

export default RecommendList;
