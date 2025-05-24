import { sidebarStyle } from "@/common/component/Sidebar/index.css";
import type { PropsWithChildren } from "react";

type SidebarProps = PropsWithChildren;

const Sidebar = ({ children }: SidebarProps) => {
  return <aside className={sidebarStyle}>{children}</aside>;
};

export default Sidebar;
