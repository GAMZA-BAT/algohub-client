import type { RankingResponse } from "@/api/groups/type";
import defaultImg from "@/asset/img/small_logo.png";
import {
  allNicknameStyle,
  changeStyle,
  infoWrapper,
  listContainer,
  listWrapper,
  rankTextStyle,
  rankWrapper,
  solvedTextStyle,
} from "@/view/group/dashboard/Ranking/index.css";
import Image from "next/image";

const RankList = ({ info }: { info: RankingResponse }) => {
  const { profileImage, rank, solvedCount, userNickname, rankDiff } = info;

  const change = () => {
    if (rankDiff === "-") return "unChanged";
    switch (rankDiff[0]) {
      case "+":
        return "up";
      case "-":
        return "down";
    }
    return "unChanged";
  };

  return (
    <li className={listWrapper}>
      <Image
        src={profileImage || defaultImg}
        alt={`${rank}등: ${userNickname}`}
        width={44}
        height={44}
      />
      <div className={listContainer}>
        <div className={rankWrapper}>
          <div className={infoWrapper}>
            <span className={rankTextStyle}>{rank}위</span>
            <span className={allNicknameStyle}>{userNickname}</span>
          </div>
          <p className={solvedTextStyle}>{`${solvedCount} solved`}</p>
        </div>
        <p className={changeStyle({ change: change() })}>{rankDiff}</p>
      </div>
    </li>
  );
};

export default RankList;
