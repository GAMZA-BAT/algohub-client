import {
  descTextStyle,
  descWrapper,
  metaTextStyle,
} from "@/view/group/index/Withdraw/index.css";

const PromptWithdraw = () => {
  return (
    <>
      <h2 className={metaTextStyle}>스터디를 나가시겠어요?</h2>
      <div className={descWrapper}>
        <p className={descTextStyle}>
          나간 스터디를 다시 가입하려면 초대 코드가 필요해요.
        </p>
        <p className={descTextStyle}>
          나가기 버튼을 누르시면 즉각적으로 스터디에서 탈퇴되어요.
        </p>
        <p className={descTextStyle}>
          신중하게 고민하신 후 나가기 버튼을 눌러주세요.
        </p>
      </div>
    </>
  );
};

export default PromptWithdraw;
