"use client";
import { IcnLogo } from "@/asset/svg";
import { logoContainer, logoStyle } from "@/shared/component/Header/index.css";
import Link from "next/link";

type LogoProps = {
  userNickname: string;
};

const Logo = ({ userNickname }: LogoProps) => {
  return (
    <Link
      href={`/${userNickname}`}
      className={logoContainer}
      aria-label="User page"
    >
      <IcnLogo className={logoStyle} aria-label="algoHub 로고" />
    </Link>
  );
};

export default Logo;
