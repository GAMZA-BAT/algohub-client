"use client";

import {} from "@/asset/svg";
import Modal from "@/common/component/Modal";
import Withdraw from "@/view/group/index/component/Withdraw";
import { useState } from "react";

const GroupDashboardPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      hasCloseBtn
    >
      <Withdraw />
    </Modal>
  );
};

export default GroupDashboardPage;
