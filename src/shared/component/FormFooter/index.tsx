"use client";

import GithubButton from "@/shared/component/FormFooter/GithubButton";
import { divider, dividerTextStyle, dividerWrapper } from "@/view/login/index.css";
import Link from "next/link";
import { labelContainer, labelStyle } from "./index.css";

interface FooterProps {
  guideLabel?: string;
  link: {
    label: string;
    href: string;
  };
}

const FormFooter = ({ guideLabel, link: { label, href } }: FooterProps) => {
  return (
    <footer className={labelContainer}>
      <div
        style={{
          display: "flex",
          gap: "0.4rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p className={labelStyle.guide}>{guideLabel}</p>
        <Link href={href} className={labelStyle.link} scroll={false}>
          {label}
        </Link>
      </div>
      <div className={dividerWrapper}>
        <div className={divider} />
        <p className={dividerTextStyle}>or</p>
        <div className={divider} />
      </div>
      <GithubButton />
    </footer>
  );
};

export default FormFooter;
