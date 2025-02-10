import GithubButton from "@/shared/component/FormFooter/GithubButton";
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
      <GithubButton />
    </footer>
  );
};

export default FormFooter;
