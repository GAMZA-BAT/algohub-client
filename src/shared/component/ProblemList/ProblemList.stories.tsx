import type { TierDetail } from "@/shared/type";
import type { Meta } from "@storybook/react";
import ProblemList from ".";

const meta: Meta<typeof ProblemList> = {
  title: "Shared/ProblemList",
  component: ProblemList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProblemList>;
export default meta;

export const Default = {
  render: () => {
    const data = [
      {
        id: 1,
        title: "트리에서의 동적 계획법",
        date: "2024-01-01",
        tier: "silver 1",
        status: "solved",
        solved: 50,
        total: 200,
      },
      {
        id: 2,
        title: "백트래킹",
        date: "2024-03-03",
        tier: "bronze 5",
        status: "unsolved",
        solved: 50,
        total: 200,
      },
      {
        id: 3,
        title: "깊이/너비 우선 탐색",
        date: "2024-01-01",
        tier: "diamond 3",
        status: "wrong",
        solved: 50,
        total: 200,
      },
    ];

    return (
      <ProblemList>
        {data.map(({ id, title, date, tier, status, solved, total }) => (
          <ProblemList.Item
            key={id}
            id={id}
            title={title}
            date={date}
            tier={tier as TierDetail}
            status={status as "solved" | "wrong" | "unsolved"}
            solved={solved}
            total={total}
          />
        ))}
      </ProblemList>
    );
  },
};
