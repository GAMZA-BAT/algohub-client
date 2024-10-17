"use client";

import Modal from "@/common/component/Modal";
import ProblemList from "@/shared/component/ProblemList";
import CodeSection from "@/view/group/solved-detail/CodeSection";
import CommentSection from "@/view/group/solved-detail/CommentSection";
import {
  modalContainer,
  modalWrapper,
  solvedListStyle,
} from "@/view/group/solved-detail/index.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <Modal isOpen={true} onClose={() => router.back()} hasCloseBtn>
      <div className={modalWrapper}>
        <Link href="https://www.acmicpc.net/problem/27969">
          <ProblemList.Item
            id={1}
            title="트리에서의 동적 계획법"
            date="2024-01-01"
            tier="bronze 1"
            status="solved"
            solved={50}
            total={200}
            className={solvedListStyle}
          />
        </Link>
        <div className={modalContainer}>
          <CodeSection />
          <CommentSection />
        </div>
      </div>
    </Modal>
  );
};

export default page;
