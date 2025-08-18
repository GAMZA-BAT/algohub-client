import RecommendCard from "./RecommendCard";
import {
  recommendHeaderWrapper,
  recommendSectionWrapper,
  recommendStudyTitle,
} from "./index.css";

const RecommendStudySection = () => (
  <section
    className={recommendSectionWrapper}
    aria-labelledby="recommend-title"
  >
    <div className={recommendHeaderWrapper}>
      <h2 id="recommend-title" className={recommendStudyTitle}>
        추천 스터디
      </h2>
      <input />
    </div>
    <RecommendCard />
  </section>
);

export default RecommendStudySection;
