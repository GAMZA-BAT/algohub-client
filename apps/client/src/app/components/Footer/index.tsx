import { IcnInstagram, IcnLogo, IcnMail } from "@/asset/svg";
import Link from "next/link";
import {
  buttonContainer,
  footerStyle,
  iconContainer,
  iconStyle,
  logoStyle,
  textStyle,
} from "./index.css";

const Footer = () => {
  return (
    <footer className={footerStyle}>
      <div className={buttonContainer}>
        <IcnLogo className={logoStyle} aria-label="algoHub 로고" />
        <div className={iconContainer}>
          <Link
            href="https://www.instagram.com/algohub.official/"
            target="_blank"
          >
            <IcnInstagram
              className={iconStyle}
              role="button"
              tabIndex={0}
              aria-label="instagram을 새 창에서 열기"
            />
          </Link>
          <Link href="mailto:algohub0808@gmail.com" target="_blank">
            <IcnMail
              className={iconStyle}
              role="button"
              tabIndex={0}
              aria-label="메일 보내기"
            />
          </Link>
        </div>
      </div>
      <p className={textStyle}>Copyright 2024. Algohub All rights reserved.</p>
    </footer>
  );
};

export default Footer;
