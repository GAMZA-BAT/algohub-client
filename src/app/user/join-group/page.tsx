"use client";
import type { GroupJoinResponse } from "@/api/group/type";
import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import DecisionPrompt from "@/view/user/join-group/DecisionPrompt";
import GroupInfoCard from "@/view/user/join-group/GroupInfoCard";
import { btnWrapper, wrapper } from "@/view/user/join-group/index.css";
import { useRouter } from "next/navigation";

const JoinGroupPage = () => {
  const router = useRouter();
  const tmpGroupInfo: GroupJoinResponse = {
    src: "",
    name: "숭실대학교 알고리즘 스터디",
    startDate: "2024.08.13",
    endDate: "2024.09.13",
    description:
      "BE Developer로 성장하고 싶은 숭실대학교 학생들이 푸는 알고리즘 스터디입니다.",
    owner: "진이",
  };
  return (
    <main className={sidebarWrapper}>
      <Sidebar />
      <Modal isOpen={true} onClose={() => router.back()} hasCloseBtn>
        <div className={wrapper}>
          <GroupInfoCard groupInfo={tmpGroupInfo} />
          <DecisionPrompt owner={tmpGroupInfo.owner} />
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
