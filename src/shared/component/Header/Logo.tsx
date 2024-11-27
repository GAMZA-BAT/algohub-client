"use client";

import type { UserResponse } from "@/api/users/type";
import { IcnLogo } from "@/asset/svg";
import { logoContainer, logoStyle } from "@/shared/component/Header/index.css";
import Link from "next/link";

type LogoProps = {
  user: UserResponse;
};

const Logo = ({ user }: LogoProps) => {
  return (
    <Link
      href={`/${user.nickname}`}
      className={logoContainer}
      aria-label="User page"
    >
      <IcnLogo className={logoStyle} aria-label="algoHub 로고" />
    </Link>
  );
};

export default Logo;
