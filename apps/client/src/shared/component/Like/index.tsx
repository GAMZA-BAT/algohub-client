import { IcnFavoriteBorder } from "@/asset/svg";
import { heartCountStyle, heartStyle } from "@/shared/component/Like/index.css";

const Like = () => {
  // TODO: 좋아요 기능 구현
  return (
    <div className={heartStyle}>
      <IcnFavoriteBorder width={20} height={20} />
      <span className={heartCountStyle}>16</span>
    </div>
  );
};

export default Like;
