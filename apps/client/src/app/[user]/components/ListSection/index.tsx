"use client";

import GroupCard from "@/app/[user]/components/GroupCard";
import { SECTION_TITLE } from "@/app/[user]/components/constant";
import {
  emptyWrapper,
  groupLabelStyle,
} from "@/app/[user]/components/index.css";
import type { GroupResponse } from "@/app/api/groups/type";
import Carousel from "@/common/component/Carousel";
import Empty from "@/shared/component/Empty";

interface ListSectionProps {
  status: "inProgress" | "done" | "queued" | "bookmarked";
  groups: GroupResponse[];
}

const ListSection = ({ status, groups }: ListSectionProps) => {
  return (
    <div>
      <h2 className={groupLabelStyle}>{SECTION_TITLE[status]}</h2>
      {groups.length ? (
        <Carousel length={groups.length}>
          {groups.map((item: GroupResponse, idx: number) => (
            <Carousel.Item key={item.id} index={idx}>
              <GroupCard item={item} status={status} />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <div className={emptyWrapper}>
          <Empty guideText="해당되는 스터디가 없습니다." />
        </div>
      )}
    </div>
  );
};

export default ListSection;
