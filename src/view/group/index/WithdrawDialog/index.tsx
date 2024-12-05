import { useMyNicknameQuery } from "@/app/[user]/query";
import Button from "@/common/component/Button";
import PromptWithdraw from "@/view/group/index/WithdrawDialog/PromptWithdraw";
import SuccessWithdraw from "@/view/group/index/WithdrawDialog/SuccessWithdraw";
import { withdrawWrapper } from "@/view/group/index/WithdrawDialog/index.css";
import { useWithdrawMutation } from "@/view/group/index/WithdrawDialog/query";
import { useState } from "react";

type WithdrawDialogProps = {
  groupId: number;
};

const WithdrawDialog = ({ groupId: _groupId }: WithdrawDialogProps) => {
  const [isWithdrawn, setIsWithdrawn] = useState(false);
  const userNickname = useMyNicknameQuery();

  const { mutateAsync: withdraw } = useWithdrawMutation(groupId);

  const handleBtnClick = () => {
    if (!isWithdrawn) {
      withdraw();
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
