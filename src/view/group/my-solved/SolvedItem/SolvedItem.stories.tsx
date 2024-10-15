import type { Solution } from "@/shared/type";
import type { Meta } from "@storybook/react";
import { default as ProblemList, default as SolvedItem } from ".";

const meta: Meta<typeof ProblemList> = {
  title: "Shared/SolvedItem",
  component: ProblemList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof ProblemList>;
export default meta;

export const Default = {
  render: () => {
    const data: Solution[] = [
      {
        solutionId: 1,
        solvedDateTime: "2024-11-01 16:00:00",
        level: "diamond 1",
        title: "트리 동적 계획법",
        memoryUsage: 300,
        executionTime: 400,
        language: "C++",
        result: "incorrect",
        codeLength: 8000,
        commentCount: 0,
      },
      {
        solutionId: 1,
        solvedDateTime: "2024-11-01 18:31:00",
        level: "diamond 1",
        title: "트리 동적 계획법",
        memoryUsage: 300,
        executionTime: 400,
        language: "Python",
        result: "correct",
        codeLength: 8000,
        commentCount: 4,
      },
    ];

    return (
      <ul>
        {data.map((solution) => (
          <SolvedItem key={solution.solutionId} {...solution} />
        ))}
      </ul>
    );
  },
};
