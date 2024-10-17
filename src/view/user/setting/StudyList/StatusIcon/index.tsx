import {
  IcnStatusDone,
  IcnStatusFavorites,
  IcnStatusProgress,
  IcnStatusQueued,
} from "@/asset/svg";
import type { Status } from "@/view/user/index/type";

type StatusIconProps = {
  status: Status;
};

const StatusIcon = ({ status }: StatusIconProps) => {
  switch (status) {
    case "bookmarked":
      return (
        <IcnStatusFavorites
          aria-label={`상태: ${status}`}
          width={"5.8rem"}
          height={"2.1rem"}
        />
      );
    case "queued":
      return (
        <IcnStatusQueued
          aria-label={`상태: ${status}`}
          width={"5.2rem"}
          height={"2.1rem"}
        />
      );
    case "inProgress":
      return (
        <IcnStatusProgress
          aria-label={`상태: ${status}`}
          width={"5.7rem"}
          height={"2.1rem"}
        />
      );
    case "done":
      return (
        <IcnStatusDone
          aria-label={`상태: ${status}`}
          width={"3.8rem"}
          height={"2.1rem"}
        />
      );
  }
};

export default StatusIcon;
