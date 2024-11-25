import Button from "@/common/component/Button";
import PromptWithdraw from "@/view/group/index/WithdrawDialog/PromptWithdraw";
import SuccessWithdraw from "@/view/group/index/WithdrawDialog/SuccessWithdraw";
import { withdrawWrapper } from "@/view/group/index/WithdrawDialog/index.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

type WithdrawDialogProps = {
  groupId: number;
};

const WithdrawDialog = ({ groupId }: WithdrawDialogProps) => {
  const [isLeaving, setIsLeaving] = useState(false);

  const router = useRouter();

  // const { mutateAsync: withdraw } = useWithdrawMutation(groupId);

  const handleBtnClick = async () => {
    // const response = await withdraw();
    if (isLeaving) router.push("/user");

    setIsLeaving(true);
  };

  return (
    <div className={withdrawWrapper}>
      {isLeaving ? <SuccessWithdraw /> : <PromptWithdraw />}
      <Button onClick={handleBtnClick}>{isLeaving ? "확인" : "나가기"}</Button>
    </div>
  );
};

export default WithdrawDialog;
