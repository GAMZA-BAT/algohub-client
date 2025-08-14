"use client";

import ExtensionAlertModal from "@/shared/component/ExtensionAlertModal";
import { extensionAlertModalAtom } from "@/shared/store/alertModal";
import { getNextMidnight } from "@/shared/util/time";
import { useAtom } from "jotai";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

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
    const isAuth = status === "authenticated";
    const isInstalled = !!document.querySelector(
      'meta[name="extension-installed"]',
    );

    if (isAuth && !isInstalled) {
      const storedDate = localStorage.getItem(key);
      const parsedStoredDate = storedDate
        ? Number.parseInt(storedDate, 10)
        : null;

      const isNextDate = parsedStoredDate
        ? Date.now() < parsedStoredDate
        : false;
      if (!isNextDate) setIsOpen(true);
    }
  }, [status]);

  return <ExtensionAlertModal isOpen={isOpen} onClose={onClose} />;
};

export default ExtensionAlertModalController;
