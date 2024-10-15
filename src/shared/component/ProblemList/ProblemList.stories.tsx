import type { Problem, TierDetail } from "@/shared/type";
import type { Meta } from "@storybook/react";
import ProblemList from ".";

const meta: Meta<typeof ProblemList> = {
  title: "Shared/ProblemList",
  component: ProblemList,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof ProblemList>;
export default meta;

export const Default = {
  render: () => {
    const data: Problem[] = [
      {
        problemId: 1,
        title: "트리에서의 동적 계획법",
        startDate: "2024-10-10",
        endDate: "2024-11-01",
        level: "silver 1",
        solved: false,
        submitMemberCount: 50,
        memberCount: 200,
        accuracy: 25,
      },
      {
        problemId: 2,
        title: "트리에서의 동적 계획법",
        startDate: "2024-10-10",
        endDate: "2024-10-14",
        level: "diamond 1",
        solved: false,
        submitMemberCount: 50,
        memberCount: 200,
        accuracy: 25,
      },
      {
        problemId: 3,
        title: "트리에서의 동적 계획법",
        startDate: "2024-10-10",
        endDate: "2024-11-01",
        level: "gold 1",
        solved: true,
        submitMemberCount: 50,
        memberCount: 200,
        accuracy: 25,
      },
    ];

    return (
      <ProblemList>
        {data.map(
          ({
            problemId,
            title,
            startDate,
            endDate,
            level,
            solved,
            submitMemberCount,
            memberCount,
            accuracy,
          }) => (
            <ProblemList.Item
              key={problemId}
              problemId={problemId}
              title={title}
              startDate={startDate}
              endDate={endDate}
              level={level as TierDetail}
              solved={solved}
              memberCount={memberCount}
              submitMemberCount={submitMemberCount}
              accuracy={accuracy}
            />
          ),
        )}
      </ProblemList>
    );
  },
};
