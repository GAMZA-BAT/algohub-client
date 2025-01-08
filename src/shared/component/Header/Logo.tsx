"use client";
import { logoContainer, logoStyle } from "@/shared/component/Header/index.css";
import Link from "next/link";
import { IcnLogo } from "../../../../public/asset/svg";

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
