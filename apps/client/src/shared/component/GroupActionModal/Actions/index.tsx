import Button from "@/common/component/Button";
import { btnWrapper } from "./index.css";

type ActionButtonsProps = {
  onConfirm: () => void;
  onReject: () => void;
  confirmText?: string;
  rejectText?: string;
};
const Actions = ({
  onConfirm,
  onReject,
  confirmText = "수락하기",
  rejectText = "거절하기",
}: ActionButtonsProps) => {
  return (
    <div className={btnWrapper}>
      <Button type="button" size="medium" color="lg" onClick={onReject}>
        {rejectText}
      </Button>
      <Button type="button" size="medium" color="purple" onClick={onConfirm}>
        {confirmText}
      </Button>
    </div>
  );
};

export default Actions;
