import { arrowStyle } from "@/common/component/Carousel/index.css";
import { IcnBtnNext, IcnBtnPrev } from "../../../../public/asset/svg";

type ArrowProps = {
  position: "left" | "right";
  onClick: () => void;
};

const Arrow = ({ position, onClick }: ArrowProps) => {
  return (
    <button className={arrowStyle({ position })} onClick={onClick}>
      {position === "left" && <IcnBtnPrev width={28} height={28} />}
      {position === "right" && <IcnBtnNext width={28} height={28} />}
    </button>
  );
};

export default Arrow;
