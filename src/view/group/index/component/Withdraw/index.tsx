import Button from "@/common/component/Button";
import SuccessWithdraw from "@/view/group/index/component/Withdraw/SuccessWithdraw";
import PromptWithdraw from "@/view/group/index/component/Withdraw/\bPromptWithdraw";
import { withdrawWrapper } from "@/view/group/index/component/Withdraw/index.css";
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
    <article className={withdrawWrapper}>
      {isLeaving ? <SuccessWithdraw /> : <PromptWithdraw />}
      <Button onClick={handleBtnClick}>{isLeaving ? "확인" : "나가기"}</Button>
    </article>
  );
};

export default Withdraw;
