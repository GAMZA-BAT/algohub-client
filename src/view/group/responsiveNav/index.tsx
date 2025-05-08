"use client";

import {
  IcnCalculator,
  IcnExit,
  IcnLine,
  IcnPlus,
  IcnSetting,
  IcnSquare,
} from "@/asset/svg";
import Menu from "@/common/component/Menu/Menu";
import { useMediaQuery } from "@/common/hook/useMediaQuery";
import NavBar from "@/shared/component/NavBar";
import {
  itemStyle,
  linkStyle,
  listStyle,
} from "@/view/group/responsiveNav/index.css";
import { motion } from "framer-motion";
import Link from "next/link";

interface ResponsiveNavProps {
  groupId: number;
  isOwner?: boolean;
}

const ResponsiveNav = ({ groupId, isOwner }: ResponsiveNavProps) => {
  const { isMobile } = useMediaQuery({});

  const filterRoute = (name: string) => {
    switch (name) {
      case "dashboard": {
        return `/group/${groupId}`;
      }
      case "problem-list": {
        return `/group/${groupId}/problem-list`;
      }
      case "my-solved": {
        return `/group/${groupId}/my-solved`;
      }
      case "setting": {
        return `/group/${groupId}/setting`;
      }
      case "withdraw": {
        return `/group/${groupId}/withdraw`;
      }
      default: {
        return "";
      }
    }
  };

  return (
    <NavBar>
      {isMobile ? (
        <div
          style={{
            position: "relative",
            height: "7.2rem",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Menu
            label="hi"
            renderTriggerButton={
              <motion.button
                onClick={() => {}}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  width: "4.8rem",
                  height: "4.8rem",
                }}
              >
                <IcnLine width={30} height={30} color="white" />
              </motion.button>
            }
            renderList={
              <ul className={listStyle}>
                <li className={itemStyle}>
                  <Link className={linkStyle} href={filterRoute("dashboard")}>
                    대시보드
                  </Link>
                </li>
                <li className={itemStyle}>
                  <Link
                    className={linkStyle}
                    href={filterRoute("problem-list")}
                  >
                    문제 리스트
                  </Link>
                </li>
                <li className={itemStyle}>
                  <Link className={linkStyle} href={filterRoute("my-solved")}>
                    내가 푼 문제
                  </Link>
                </li>
                <li className={itemStyle}>
                  <Link className={linkStyle} href={filterRoute("setting")}>
                    스터디 관리
                  </Link>
                </li>
                <li className={itemStyle}>
                  <Link className={linkStyle} href={filterRoute("withdraw")}>
                    스터디 나가기
                  </Link>
                </li>
              </ul>
            }
          />
        </div>
      ) : (
        <>
          <NavBar.Item
            icon={<IcnSquare width={24} height={24} />}
            mode="fill"
            href={filterRoute("dashboard")}
          >
            대시보드
          </NavBar.Item>
          <NavBar.Item
            icon={<IcnPlus width={16} height={16} />}
            mode="stroke"
            href={filterRoute("problem-list")}
          >
            문제 리스트
          </NavBar.Item>
          <NavBar.Item
            icon={<IcnCalculator width={20} height={20} />}
            mode="stroke"
            href={filterRoute("my-solved")}
          >
            내가 푼 문제
          </NavBar.Item>
          {isOwner && (
            <NavBar.Item
              icon={<IcnSetting width={16} height={16} />}
              mode="stroke"
              href={filterRoute("setting")}
            >
              스터디 관리
            </NavBar.Item>
          )}
          {!isOwner && (
            <NavBar.Item
              icon={<IcnExit width={24} height={24} />}
              mode="stroke"
              href={filterRoute("withdraw")}
            >
              스터디 나가기
            </NavBar.Item>
          )}
        </>
      )}
    </NavBar>
  );
};

export default ResponsiveNav;
