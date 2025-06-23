import { circleNumberStyle } from "@/view/group/dashboard/GroupSidebar/index.css";
import type { PropsWithChildren } from "react";

const CircleNumber = ({ children }: PropsWithChildren) => {
  return (
    <div className={circleNumberStyle} aria-label="총 사람 수">
      {children}
    </div>
  );
};

export default CircleNumber;
