"use client";
import { IcnClose, IcnLogo } from "@/asset/svg";
import { handleA11yClick } from "@/common/util/dom";
import { logoContainer, logoStyle } from "@/shared/component/Header/index.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerStyle, iconStyle } from "./index.css";

type AuthHeaderProps = {
  handleClick: () => void;
};

const AuthHeader = ({ handleClick }: AuthHeaderProps) => {
  const pathname = usePathname();
  const showLogo = pathname.includes("/login");
  return (
    <header className={headerStyle({ showLogo })}>
      {showLogo && (
        <Link
          href={"/"}
          className={logoContainer}
          aria-label="온보딩 페이지로 이동"
        >
          <IcnLogo className={logoStyle} />
        </Link>
      )}
      <IcnClose
        className={iconStyle}
        width={"2rem"}
        height={"2rem"}
        role="button"
        onClick={handleClick}
        onKeyDown={handleA11yClick(handleClick)}
        tabIndex={0}
      />
    </header>
  );
};

export default AuthHeader;
