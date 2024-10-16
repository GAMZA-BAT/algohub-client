"use client";
import type { GroupRankingResponse } from "@/api/group/type";
import { IcnMiniLogo } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import {
  avatarStyle,
  infoStyle,
  infoTextStyle,
  nicknameStyle,
  rankingCardStyle,
  rankingCardWrapper,
} from "@/view/group/dashboard/Ranking/index.css";

const RankingCard = ({
  info: { profileImage, rank, solvedCount, userNickname },
}: { info: GroupRankingResponse }) => {
  const parseRank = ["1st", "2nd", "3rd"];
  return (
    <article className={rankingCardWrapper}>
      <div className={rankingCardStyle}>
        <Avatar
          src={profileImage}
          alt={`${rank}등: ${userNickname}`}
          className={avatarStyle}
        />
        <div className={infoStyle}>
          <span className={infoTextStyle({ highlight: true })}>
            {parseRank[rank]}
          </span>
          <IcnMiniLogo width={5} height={5} />
          <span className={infoTextStyle({ highlight: false })}>
            {`${solvedCount} solved`}
          </span>
        </div>
        <h2 className={nicknameStyle}>{userNickname}</h2>
      </div>
    </article>
  );
};

export default RankingCard;
