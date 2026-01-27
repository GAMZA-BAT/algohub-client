"use client";

import Modal from "@/common/component/Modal";
import { usePathname, useRouter } from "next/navigation";

export default function InterceptingNoticeLayout({
  children,
  params: { groupId },
}: {
  children: React.ReactNode;
  params: { groupId: string };
}) {
  const router = useRouter();

  const path = usePathname();
  const endsWith = path.endsWith("/notice");

  const handleClose = () => {
    /* 
      /notice는 parallel route 언마운트를 위해 back 사용
      /notice/:path는 url로 들어왔을 때 back할 history가 없으므로 replace 사용
    */
    endsWith ? router.back() : router.replace(`/group/${groupId}/notice`);
  };
  return (
    <Modal
      isOpen={true}
      onClose={handleClose}
      hasCloseBtn
      closeBtnType="secondary"
    >
      {children}
    </Modal>
  );
}
