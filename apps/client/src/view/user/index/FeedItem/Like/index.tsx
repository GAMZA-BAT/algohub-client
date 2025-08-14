import { IcnFavoriteBorder } from "@/asset/svg";
import {
  heartCountStyle,
  heartStyle,
  heartWrapper,
} from "@/view/user/index/FeedItem/Like/index.css";

const Like = () => {
  // TODO: 좋아요 기능 구현
  return (
    <div className={heartWrapper}>
      <IcnFavoriteBorder width={20} height={20} className={heartStyle} />
      <span className={heartCountStyle}>16</span>
    </div>
  );
};

export default Like;
