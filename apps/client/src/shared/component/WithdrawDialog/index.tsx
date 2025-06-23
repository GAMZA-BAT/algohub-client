import Button from "@/common/component/Button";
import PromptWithdraw from "@/shared/component/WithdrawDialog/PromptWithdraw";
import SuccessWithdraw from "@/shared/component/WithdrawDialog/SuccessWithdraw";
import { withdrawWrapper } from "@/shared/component/WithdrawDialog/index.css";
import { useWithdrawMutation } from "@/shared/component/WithdrawDialog/query";
import { useState } from "react";

type WithdrawDialogProps = {
  groupId: number;
  onSuccess?: () => void;
};

const WithdrawDialog = ({ groupId, onSuccess }: WithdrawDialogProps) => {
  const [isWithdrawn, setIsWithdrawn] = useState(false);

  const { mutate: withdrawMutate } = useWithdrawMutation();

  const handleBtnClick = () => {
    if (!isWithdrawn) {
      withdrawMutate(groupId);
    } else if (isWithdrawn) {
      onSuccess?.();
    }

    setIsWithdrawn(true);
  };

  return (
    <div className={withdrawWrapper}>
      {isWithdrawn ? <SuccessWithdraw /> : <PromptWithdraw />}
      <Button onClick={handleBtnClick}>
        {isWithdrawn ? "확인" : "나가기"}
      </Button>
    </div>
  );
};

export default WithdrawDialog;
