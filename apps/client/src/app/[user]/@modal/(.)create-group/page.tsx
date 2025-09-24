"use client";

import Modal from "@/common/component/Modal";
import { usePvEvent } from "@/shared/hook/usePvEvent";
import { useParams, useRouter } from "next/navigation";
import CreateGroup from "./components/CreateGroup";

const InterceptingCreateGroupPage = () => {
  const router = useRouter();
  const params = useParams();
  const userId = Array.isArray(params.user) ? params.user[0] : params.user;

  usePvEvent("user_create_group_page_view", {
    user_id: userId ?? "",
  });

  return (
    <Modal isOpen={true} onClose={() => router.back()} hasCloseBtn>
      <CreateGroup />
    </Modal>
  );
};
export default InterceptingCreateGroupPage;
