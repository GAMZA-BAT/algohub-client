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
      <p className={labelStyle.guide}>{guideLabel}</p>
      <Link href={href} className={labelStyle.link} scroll={false}>
        {label}
      </Link>
    </footer>
  );
};

export default FormFooter;
