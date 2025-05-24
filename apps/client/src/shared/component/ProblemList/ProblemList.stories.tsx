import type { ProblemContent } from "@/app/api/problems/type";
import type { Meta } from "@storybook/react";
import ProblemList from ".";

const data: ProblemContent[] = [
  {
    title: "막대기",
    problemId: 4,
    link: "https://www.acmicpc.net/problem/1094",
    startDate: "2024.03.19",
    endDate: "2024.12.31",
    level: 6,
    solved: true,
    submitMemberCount: 3,
    memberCount: 7,
    accuracy: 100,
    inProgress: true,
  },
  {
    title: "요리 강좌",
    problemId: 6,
    link: "https://www.acmicpc.net/problem/14869",
    startDate: "2024.08.10",
    endDate: "2024.12.12",
    level: 22,
    solved: false,
    submitMemberCount: 0,
    memberCount: 7,
    accuracy: 0,
    inProgress: true,
  },
  {
    title: "양 한마리... 양 두마리...",
    problemId: 9,
    link: "https://www.acmicpc.net/problem/11123",
    startDate: "2024.12.20",
    endDate: "2024.12.31",
    level: 9,
    solved: false,
    submitMemberCount: 0,
    memberCount: 7,
    accuracy: 0,
    inProgress: true,
  },
  {
    title: "기타줄",
    problemId: 10,
    link: "https://www.acmicpc.net/problem/1049",
    startDate: "2024.12.31",
    endDate: "2025.01.20",
    level: 7,
    solved: false,
    submitMemberCount: 0,
    memberCount: 7,
    accuracy: 0,
    inProgress: true,
  },
  {
    title: "A+B",
    problemId: 13,
    link: "https://www.acmicpc.net/problem/1000",
    startDate: "2024.11.20",
    endDate: "2024.11.28",
    level: 1,
    solved: false,
    submitMemberCount: 0,
    memberCount: 7,
    accuracy: 0,
    inProgress: true,
  },
];

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
    return (
      <ProblemList>
        {data.map(
          ({
            problemId,
            title,
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
              endDate={endDate}
              level={level}
              solved={solved}
              memberCount={memberCount}
              submitMemberCount={submitMemberCount}
              accuracy={accuracy}
              link=""
            />
          ),
        )}
      </ProblemList>
    );
  },
};

export const Owner = {
  render: () => {
    return (
      <ProblemList>
        {data.map(
          ({
            problemId,
            title,
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
              endDate={endDate}
              level={level}
              solved={solved}
              memberCount={memberCount}
              submitMemberCount={submitMemberCount}
              accuracy={accuracy}
              isOwner={true}
              link=""
            />
          ),
        )}
      </ProblemList>
    );
  },
};
