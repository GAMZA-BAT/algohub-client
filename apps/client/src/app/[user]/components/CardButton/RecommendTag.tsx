import type { RecommendationTagType } from "@/app/api/users/type";
import { tagStyle, tagWrapper } from "./index.css";

type RecommendTagType = {
  id: string;
  variant: RecommendationTagType;
};

const TAG_VARIANT = {
  HIGH_JOIN_RATE_RECENT: { color: "blue", label: "최근 가입률이 높은 스터디" },
  MOST_ACTIVE_THIS_WEEK: {
    color: "mint",
    label: "이번 주 가장 많이 활동한 스터디",
  },
  SIMILAR_DIFFICULTY: { color: "yellow", label: "난이도가 유사한 스터디" },
} as const;

const RecommendTag = ({ id, variant }: RecommendTagType) => {
  const { color, label } = TAG_VARIANT[variant];
  return (
    <div className={tagWrapper({ color })}>
      <span id={id} className={tagStyle({ color })}>
        {label}
      </span>
    </div>
  );
};

export default RecommendTag;
