"use client";
import type { RankingContent } from "@/app/api/groups/type";
import {
  avatarStyle,
  infoStyle,
  infoTextStyle,
  nicknameStyle,
  rankingCardStyle,
  rankingCardWrapper,
} from "@/app/group/[groupId]/components/Ranking/index.css";
import { IcnMiniLogo, IcnRankingCard, IcnRankingCardHover } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import { useState } from "react";

type RankingCardProps = {
  idx: number;
  info: RankingContent;
};
const RankingCard = ({
  idx,
  info: { profileImage, rank, solvedCount, userNickname },
}: RankingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const parseRank = ["1st", "2nd", "3rd"];

  return (
    <article
      className={rankingCardWrapper}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      {isHovered ? (
        <IcnRankingCardHover
          style={{ position: "absolute", inset: 0 }}
          width="146"
          height="197"
        />
      ) : (
        <IcnRankingCard
          style={{ position: "absolute", inset: 0 }}
          width="146"
          height="197"
        />
      )}
      <>
        <div className={rankingCardStyle}>
          <Avatar
            src={profileImage}
            alt={`${rank}등: ${userNickname}`}
            className={avatarStyle}
          />
          <div className={infoStyle}>
            <span className={infoTextStyle({ highlight: true })}>
              {parseRank[idx]}
            </span>
            <IcnMiniLogo width={5} height={5} />
            <span className={infoTextStyle({ highlight: false })}>
              {`${solvedCount} solved`}
            </span>
          </div>
          <h2 className={nicknameStyle}>{userNickname}</h2>
        </div>
      </>
    </article>
  );
};

export default RankingCard;
