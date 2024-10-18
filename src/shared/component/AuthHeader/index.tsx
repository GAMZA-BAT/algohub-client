"use client";
import { IcnClose, IcnLogo } from "@/asset/svg";
import { handleA11yClick } from "@/common/util/dom";
import { logoContainer, logoStyle } from "@/shared/component/Header/index.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { headerStyle, iconStyle } from "./index.css";

type AuthHeaderProps = {
  isLoginPage?: boolean;
};

const AuthHeader = ({ isLoginPage = false }: AuthHeaderProps) => {
  const router = useRouter();
  const handleClose = () => router.back();
  return (
    <header className={headerStyle({ showLogo: isLoginPage })}>
      {isLoginPage ? (
        <>
          <Link
            href={"/"}
            className={logoContainer}
            aria-label="온보딩 페이지로 이동"
          >
            <IcnLogo className={logoStyle} />
          </Link>
          <Link href={"/"}>
            <IcnClose className={iconStyle} width={"2rem"} height={"2rem"} />
          </Link>
        </>
      ) : (
        <IcnClose
          className={iconStyle}
          width={"2rem"}
          height={"2rem"}
          role="button"
          onClick={handleClose}
          onKeyDown={handleA11yClick(handleClose)}
          tabIndex={0}
        />
      )}
    </header>
  );
};

export default AuthHeader;
