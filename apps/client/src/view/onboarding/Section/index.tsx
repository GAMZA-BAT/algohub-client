import type { PropsWithChildren } from "react";
import Footer from "../Footer";
import { mainStyle, onboardingStyle } from "./index.css";

const MainWithFooter = ({ children }: PropsWithChildren) => {
  return (
    <div className={onboardingStyle}>
      <main className={mainStyle}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainWithFooter;
