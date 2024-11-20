"use client";

import type { GroupListItem } from "@/api/groups/type";
import Carousel from "@/common/component/Carousel";
import GroupCard from "@/view/user/index/GroupCard";
import { SECTION_TITLE } from "@/view/user/index/constant";
import { groupLabelStyle } from "@/view/user/index/index.css";

interface ListSectionProps {
  status: "inProgress" | "done" | "queued" | "bookmarked";
  groups: GroupListItem[];
}

const ListSection = ({ status, groups }: ListSectionProps) => {
  return (
    <>
      <h2 className={groupLabelStyle}>{SECTION_TITLE[status]}</h2>
      <Carousel length={groups.length}>
        {groups.map((item: GroupListItem, idx: number) => (
          <Carousel.Item key={item.id} index={idx}>
            <GroupCard item={item} status={status} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ListSection;
