import { tagStyle, tagWrapper } from "./index.css";

type TagType = {
  id: string;
  variant: keyof typeof TAGMETA;
};

const TAGMETA = {
  recentSignups: { color: "blue", label: "최근 가입률이 높은 스터디" },
  mostActiveThisWeek: {
    color: "mint",
    label: "이번 주 가장 많이 활동한 스터디",
  },
  similarDifficulty: { color: "yellow", label: "난이도가 유사한 스터디" },
} as const;

const RecommendTag = ({ id, variant: meta }: TagType) => {
  const { color, label } = TAGMETA[meta];
  return (
    <div className={tagWrapper({ color })}>
      <span id={id} className={tagStyle({ color })}>
        {label}
      </span>
    </div>
  );
};

export default RecommendTag;
