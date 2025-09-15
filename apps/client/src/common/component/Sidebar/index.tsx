import { sidebarStyle } from "@/common/component/Sidebar/index.css";
import clsx from "clsx";
import type { ComponentProps } from "react";

type SidebarProps = ComponentProps<"aside">;

const Sidebar = ({ children, className, ...props }: SidebarProps) => {
  return (
    <aside className={clsx(sidebarStyle, className)} {...props}>
      {children}
    </aside>
  );
};

export default Sidebar;
