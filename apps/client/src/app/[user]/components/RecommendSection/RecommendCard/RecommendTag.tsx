import { tagStyle, tagWrapper } from "./index.css";

type RecommendTagType = {
  id: string;
  variant: keyof typeof TAG_VARIANT;
};

const TAG_VARIANT = {
  recentSignups: { color: "blue", label: "최근 가입률이 높은 스터디" },
  mostActiveThisWeek: {
    color: "mint",
    label: "이번 주 가장 많이 활동한 스터디",
  },
  similarDifficulty: { color: "yellow", label: "난이도가 유사한 스터디" },
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
