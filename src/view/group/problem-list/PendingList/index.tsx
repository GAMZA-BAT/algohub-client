import PendingListItem from "@/view/group/problem-list/PendingList";
import { listStyle } from "@/view/group/problem-list/PendingList/index.css";
import type { PropsWithChildren } from "react";

type PendingListProps = PropsWithChildren;

const PendingList = ({ children }: PendingListProps) => {
  return <ul className={listStyle}>{children}</ul>;
};

PendingList.Item = PendingListItem;

export default PendingList;
