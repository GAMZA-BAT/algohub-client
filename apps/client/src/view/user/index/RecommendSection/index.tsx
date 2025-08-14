import { recommendHeaderWrapper, recommendSectionWrapper, recommendStudyTitle } from "./index.css";
import RecommendCard from "./RecommendCard";

const RecommendStudySection = () => (
    <section className={recommendSectionWrapper}>
        <div className={recommendHeaderWrapper}>
            <h2 className={recommendStudyTitle}>추천 스터디</h2>
            <input />
        </div>
        <RecommendCard />
    </section>
);

export default RecommendStudySection;