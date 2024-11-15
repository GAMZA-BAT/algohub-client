"use client";
import { useGroupByCodeQuery } from "@/app/join-group/[code]/query";
import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import { sidebarWrapper } from "@/styles/shared.css";
import DecisionPrompt from "@/view/user/join-group/DecisionPrompt";
import GroupInfoCard from "@/view/user/join-group/GroupInfoCard";
import { btnWrapper, wrapper } from "@/view/user/join-group/index.css";
import { useRouter } from "next/navigation";

const JoinGroupPage = ({ params: { code } }: { params: { code: string } }) => {
  const { data: groupData } = useGroupByCodeQuery(code);
  const router = useRouter();
  const handleReject = () => router.push("/");

  if (!groupData) return;
  return (
    <main className={sidebarWrapper}>
      <Modal isOpen={true} onClose={handleReject} hasCloseBtn>
        <div className={wrapper}>
          <GroupInfoCard groupInfo={groupData} />
          <DecisionPrompt owner="jnary" />
          <div className={btnWrapper}>
            <Button size="medium" color="lg">
              거절하기
            </Button>
            <Button size="medium" color="purple">
              수락하기
            </Button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default JoinGroupPage;
