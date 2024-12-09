import Button from "@/common/component/Button";
import PromptWithdraw from "@/view/group/index/WithdrawDialog/PromptWithdraw";
import SuccessWithdraw from "@/view/group/index/WithdrawDialog/SuccessWithdraw";
import { withdrawWrapper } from "@/view/group/index/WithdrawDialog/index.css";
import { useWithdrawMutation } from "@/view/group/index/WithdrawDialog/query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type WithdrawDialogProps = {
  groupId: number;
};

const WithdrawDialog = ({ groupId }: WithdrawDialogProps) => {
  const [isWithdrawn, setIsWithdrawn] = useState(false);
  const userNickname = useSession().data?.user?.nickname;
  const router = useRouter();

  const { mutate: withdrawMutate } = useWithdrawMutation();

  const handleBtnClick = () => {
    if (!isWithdrawn) {
      withdrawMutate(groupId, {
        onSuccess: () => router.push(`/${userNickname}`),
      });
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
