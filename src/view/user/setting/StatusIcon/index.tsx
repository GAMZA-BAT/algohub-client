import {
  IcnStatusDone,
  IcnStatusFavorites,
  IcnStatusProgress,
  IcnStatusQueued,
} from "@/asset/svg";
import type { Status } from "@/shared/type";

type StatusIconProps = {
  status: Status;
};

const StatusIcon = ({ status }: StatusIconProps) => {
  switch (status) {
    case "Favorites":
      return (
        <IcnStatusFavorites
          aria-label={`상태: ${status}`}
          width={"5.8rem"}
          height={"2.1rem"}
        />
      );
    case "Queued":
      return (
        <IcnStatusQueued
          aria-label={`상태: ${status}`}
          width={"5.2rem"}
          height={"2.1rem"}
        />
      );
    case "Progress":
      return (
        <IcnStatusProgress
          aria-label={`상태: ${status}`}
          width={"5.7rem"}
          height={"2.1rem"}
        />
      );
    case "Done":
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
