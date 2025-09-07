import {
  wrongSolvedListContainer,
  wrongSolvedListCountStyle,
  wrongSolvedListTitleStyle,
  wrongSolvedListTitleWrapper,
  wrongSolvedListWrapper,
} from "@/app/[user]/edge-case/components/WrongSolvedList/index.css";
import WrongSolvedItem from "@/app/[user]/edge-case/components/WrongSolvedList/WrongSolvedItem";

const WrongSolvedList = () => {
  return (
    <div className={wrongSolvedListContainer}>
      <div className={wrongSolvedListTitleWrapper}>
        <h2 className={wrongSolvedListTitleStyle}>내가 틀린 문제 리스트</h2>
        <span className={wrongSolvedListCountStyle}>10</span>
      </div>
      <ul className={wrongSolvedListWrapper}>
        <WrongSolvedItem />
      </ul>
    </div>
  );
};

export default WrongSolvedList;
