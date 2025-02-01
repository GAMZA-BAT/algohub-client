import type { GroupResponse, GroupStatus } from "@/app/api/groups/type";
import defaultImg from "@/asset/img/img_card_profile.png";
import { IcnCalenderCard, IcnUser, IcnUser2 } from "@/asset/svg";
import ProtectedLink from "@/shared/component/ProtectedLink";
import StatusDot from "@/view/user/index/GroupCard/StatusDot";
import {
  dateStyle,
  descStyle,
  groupCardWrapper,
  imgStyle,
  nameStyle,
  nameWrapper,
  ownerStyle,
} from "@/view/user/index/GroupCard/index.css";
import Image from "next/image";

interface GroupCardProps {
  item: GroupResponse;
  status: GroupStatus;
}
const GroupCard = ({ item, status }: GroupCardProps) => {
  const { id, name, groupImage, startDate, endDate, ownerNickname } = item;
  const isDone = status === "done";

  return (
    <ProtectedLink href={`/group/${id}`}>
      <article className={groupCardWrapper}>
        <Image
          src={groupImage || defaultImg}
          alt={""}
          width={210}
          height={156}
          className={imgStyle}
          unoptimized
        />
        <div className={nameWrapper}>
          <StatusDot status={status} />
          <h2 className={nameStyle({ isDone })}>{name}</h2>
        </div>
        <div className={dateStyle({ isDone })}>
          <IcnCalenderCard width={20} height={20} />
          <time className={descStyle({ isDone })}>{startDate}</time>
          <p className={descStyle({ isDone })}>~</p>
          <time className={descStyle({ isDone })}>{endDate}</time>
        </div>
        <div className={ownerStyle}>
          {isDone ? (
            <IcnUser2 width={10} height={14.5} />
          ) : (
            <IcnUser width={10} height={14.5} />
          )}
          <p className={descStyle({ isDone })}>{ownerNickname}</p>
        </div>
      </article>
    </ProtectedLink>
  );
};

export default GroupCard;
