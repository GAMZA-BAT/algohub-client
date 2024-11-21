"use client";

import { getGroupList } from "@/api/groups";
import type { GroupListItem } from "@/api/groups/type";
import Carousel from "@/common/component/Carousel";
import GroupCard from "@/view/user/index/GroupCard";
import { SECTION_TITLE } from "@/view/user/index/constant";
import { groupLabelStyle } from "@/view/user/index/index.css";
import { useSuspenseQuery } from "@tanstack/react-query";

interface ListSectionProps {
  status: "inProgress" | "done" | "queued" | "bookmarked";
  // groups: GroupListItem[];
}

const ListSection = ({ status }: ListSectionProps) => {
  const { data: groups } = useSuspenseQuery({
    queryKey: ["group", "list", "user"],
    queryFn: getGroupList,
  });

  return (
    <>
      <h2 className={groupLabelStyle}>{SECTION_TITLE[status]}</h2>
      <Carousel length={groups[status]?.length}>
        {groups[status]?.map((item: GroupListItem, idx: number) => (
          <Carousel.Item key={item.id} index={idx}>
            <GroupCard item={item} status={status} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ListSection;
