import type { GroupRankingResponse } from "@/api/group/type";
import defaultImg from "@/asset/img/gray_small_icon.png";
import {
  allNicknameStyle,
  changeStyle,
  infoWrapper,
  listContainer,
  listWrapper,
  rankTextStyle,
  rankWrapper,
  solvedTextStyle,
} from "@/view/group/dashboard/component/Ranking/index.css";
import Image from "next/image";

const RankList = ({ info }: { info: GroupRankingResponse }) => {
  const { profileImage, rank, solvedCount, userNickname } = info;
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
        <p className={changeStyle({ change: "up" })}>+2</p>
      </div>
    </li>
  );
};

export default RankList;
