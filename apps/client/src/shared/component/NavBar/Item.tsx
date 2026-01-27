"use client";

import {
  iconStyle,
  indicatorStyle,
  itemStyle,
} from "@/shared/component/NavBar/index.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type HTMLAttributes, type ReactElement, cloneElement } from "react";

interface NavBarItemProps extends HTMLAttributes<HTMLLIElement> {
  href: string;
  icon?: ReactElement;

  mode?: "fill" | "stroke";
}

const NavBarItem = ({ href, icon, mode, children }: NavBarItemProps) => {
  const pathname = usePathname();

  const isSelected = href.split("?").at(0) === pathname;

  const variant = isSelected
    ? mode
    : (`none${mode}` as NavBarItemProps["mode"]);

  return (
    <li>
      <Link href={href} className={itemStyle({ isSelected })}>
        {icon &&
          cloneElement(icon, {
            className: iconStyle({
              variant,
            }),
          })}
        {children}
        {isSelected && (
          <motion.div
            tabIndex={-1}
            layoutId="navbar-indicator"
            className={indicatorStyle}
          />
        )}
      </Link>
    </li>
  );
};

export default NavBarItem;
