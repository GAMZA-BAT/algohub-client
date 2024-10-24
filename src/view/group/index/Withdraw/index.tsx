import Button from "@/common/component/Button";
import PromptWithdraw from "@/view/group/index/Withdraw/PromptWithdraw";
import SuccessWithdraw from "@/view/group/index/Withdraw/SuccessWithdraw";
import { withdrawWrapper } from "@/view/group/index/Withdraw/index.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Withdraw = () => {
  const [isLeaving, setIsLeaving] = useState(false);
  const router = useRouter();

  const handleBtnClick = () => {
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

export default Withdraw;
