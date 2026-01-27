import { loginAlertModalAtom } from "@/shared/store/alertModal";
import { useSetAtom } from "jotai";
import { useSession } from "next-auth/react";
import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

const ProtectedLink = (props: ComponentProps<typeof Link>) => {
  const handleShowModal = useSetAtom(loginAlertModalAtom);
  const { status: authStatus } = useSession();
  const handleClick = (e: MouseEvent) => {
    if (authStatus === "unauthenticated") {
      e.preventDefault();
      handleShowModal(true);
    }
  };
  return <Link {...props} onClick={handleClick} />;
};

export default ProtectedLink;
