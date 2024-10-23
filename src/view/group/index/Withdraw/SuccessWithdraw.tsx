import { exitGroup } from "@/asset/lottie";
import Animation from "@/common/component/Animation";
import {
  metaTextStyle,
  successStyle,
} from "@/view/group/index/Withdraw/index.css";

const SuccessWithdraw = () => {
  return (
    <>
      <h2 className={metaTextStyle}>정상적으로 스터디에 탈퇴되었어요.</h2>
      <div className={successStyle}>
        <Animation size="100px" animationJson={exitGroup} />
      </div>
    </>
  );
};

export default SuccessWithdraw;
