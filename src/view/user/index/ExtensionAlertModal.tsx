"use client";

import ExtensionAlertModal from "@/shared/component/ExtensionAlertModal";
import { extensionAlertModalAtom } from "@/shared/store/alertModal";
import { getNextMidnight } from "@/shared/util/time";
import { useAtom } from "jotai";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

declare global {
  interface Window {
    isExtensionInstalled: boolean;
  }
}

type ExtensionAlertModalControllerProps = {
  domain: "user" | "group";
};

const ExtensionAlertModalController = ({
  domain,
}: ExtensionAlertModalControllerProps) => {
  const [isOpen, setIsOpen] = useAtom(extensionAlertModalAtom);
  const { status } = useSession();
  const nextDate = +getNextMidnight();
  const key = `${domain}-page-extension-alert-date`;

  const onClose = () => {
    localStorage.setItem(key, nextDate.toString());
    setIsOpen(false);
  };

  useEffect(() => {
    // 테스트용
    // TODO: 익스텐션 업데이트 후 제거하기
    window.isExtensionInstalled = false;

    if (status === "authenticated" && !window?.isExtensionInstalled) {
      const extensionAlertDate = localStorage.getItem(key);
      const isNextDate = extensionAlertDate
        ? Date.now() < +extensionAlertDate
        : false;
      if (!isNextDate) setIsOpen(true);
    }
  }, [status]);

  return <ExtensionAlertModal isOpen={isOpen} onClose={onClose} />;
};

export default ExtensionAlertModalController;
