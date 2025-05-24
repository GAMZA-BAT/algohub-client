import type { SolutionContent } from "@/app/api/solutions/type";
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
    const data: SolutionContent[] = [
      {
        solutionId: 1,
        problemTitle: "막대기",
        problemLevel: 6,
        accuracy: 100,
        submitMemberCount: 3,
        totalMemberCount: 8,
        nickname: "rladmstn",
        profileImage:
          "https://algohubbucket.s3.ap-northeast-2.amazonaws.com/4c49032c-9f91-40ef-83db-f7e7d5f95b16pexels-eberhardgross-1287142.jpg",
        solvedDateTime: "2024.10.31 05:23:00",
        content: "solution1",
        result: "맞았습니다!!",
        memoryUsage: 256,
        executionTime: 120,
        language: "Java",
        codeLength: 345,
        commentCount: 3,
      },
      {
        solutionId: 1,
        problemTitle: "막대기",
        problemLevel: 6,
        accuracy: 100,
        submitMemberCount: 3,
        totalMemberCount: 8,
        nickname: "rladmstn",
        profileImage:
          "https://algohubbucket.s3.ap-northeast-2.amazonaws.com/4c49032c-9f91-40ef-83db-f7e7d5f95b16pexels-eberhardgross-1287142.jpg",
        solvedDateTime: "2024.10.31 05:23:00",
        content: "solution1",
        result: "맞았습니다!!",
        memoryUsage: 256,
        executionTime: 120,
        language: "Java",
        codeLength: 345,
        commentCount: 3,
      },
      {
        solutionId: 1,
        problemTitle: "막대기",
        problemLevel: 6,
        accuracy: 100,
        submitMemberCount: 3,
        totalMemberCount: 8,
        nickname: "rladmstn",
        profileImage:
          "https://algohubbucket.s3.ap-northeast-2.amazonaws.com/4c49032c-9f91-40ef-83db-f7e7d5f95b16pexels-eberhardgross-1287142.jpg",
        solvedDateTime: "2024.10.31 05:23:00",
        content: "solution1",
        result: "맞았습니다!!",
        memoryUsage: 256,
        executionTime: 120,
        language: "Java",
        codeLength: 345,
        commentCount: 3,
      },
      {
        solutionId: 1,
        problemTitle: "막대기",
        problemLevel: 6,
        accuracy: 100,
        submitMemberCount: 3,
        totalMemberCount: 8,
        nickname: "rladmstn",
        profileImage:
          "https://algohubbucket.s3.ap-northeast-2.amazonaws.com/4c49032c-9f91-40ef-83db-f7e7d5f95b16pexels-eberhardgross-1287142.jpg",
        solvedDateTime: "2024.10.31 05:23:00",
        content: "solution1",
        result: "맞았습니다!!",
        memoryUsage: 256,
        executionTime: 120,
        language: "Java",
        codeLength: 345,
        commentCount: 3,
      },
    ];

    return (
      <ul>
        {data.map((solution) => (
          <SolvedItem key={solution.solutionId} solutionInfo={solution} />
        ))}
      </ul>
    );
  },
};
