import { CommentsProvider } from "@/view/group/solved-detail/CommentSection/provider";
import type { Meta } from "@storybook/react";
import { default as CommentBox } from ".";

const meta: Meta<typeof CommentBox> = {
  title: "Shared/CommentBox",
  component: CommentBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "24rem" }}>
        <CommentsProvider solutionId={1}>
          <Story />
        </CommentsProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof CommentBox>;
export default meta;

export const NoticeOverflow = {
  args: {
    variant: "notice",
    commentId: 1,
    writerNickname: "최주용",
    writerProfileImage:
      "https://velog.velcdn.com/images/wuzoo/post/0ccaf96f-ea68-46bb-8603-2dece6320b57/image.jpeg",
    createdAt: "2024-10-14T14:45:52.731Z",
    content:
      "이 접근 방식이 문제를 해결하는 데 충분히 효율적일까요? 추가적인 최적화 방법이 있을까요? 이 접근 방식이 문제를 해결하는 데 충분히 효율적일까요? 추가적인 최적화 방법이 있을까요?",
  },
};

export const NoticeDefault = {
  args: {
    variant: "notice",
    commentId: 1,
    writerNickname: "최주용",
    writerProfileImage:
      "https://velog.velcdn.com/images/wuzoo/post/0ccaf96f-ea68-46bb-8603-2dece6320b57/image.jpeg",
    createdAt: "2024-10-14T14:45:52.731Z",
    content: "알고헙 코멘트 박스를 만들고 있습니다.",
  },
};

export const DetailDefault = {
  args: {
    variant: "detail",
    commentId: 1,
    writerNickname: "최주용",
    writerProfileImage:
      "https://velog.velcdn.com/images/wuzoo/post/0ccaf96f-ea68-46bb-8603-2dece6320b57/image.jpeg",
    createdAt: "2024-10-14T14:45:52.731Z",
    content: "알고헙 코멘트 박스를 만들고 있습니다.",
  },
};

export const DetailOverflow = {
  args: {
    variant: "detail",
    commentId: 1,
    writerNickname: "최주용",
    writerProfileImage:
      "https://velog.velcdn.com/images/wuzoo/post/0ccaf96f-ea68-46bb-8603-2dece6320b57/image.jpeg",
    createdAt: "2024-10-14T14:45:52.731Z",
    content:
      "알고헙 코멘트 박스를 만들고 있습니다. 알고헙 코멘트 박스를 만들고 있습니다. 알고헙 코멘트 박스를 만들고 있습니다. 알고헙 코멘트 박스를 만들고 있습니다.",
  },
};

export const CommentList = {
  render: () => {
    const data = [
      {
        variant: "notice",
        commentId: 1,
        writerNickname: "최주용",
        writerProfileImage:
          "https://velog.velcdn.com/images/wuzoo/post/0ccaf96f-ea68-46bb-8603-2dece6320b57/image.jpeg",
        createdAt: "2024-10-14T14:45:52.731Z",
        content: "알고헙 코멘트 박스를 만들고 있습니다.",
      },
      {
        variant: "notice",
        commentId: 2,
        writerNickname: "이진",
        writerProfileImage:
          "https://velog.velcdn.com/images/wuzoo/post/0ccaf96f-ea68-46bb-8603-2dece6320b57/image.jpeg",
        createdAt: "2024-08-14T14:45:52.731Z",
        content:
          "이 접근 방식이 문제를 해결하는 데 충분히 효율적일까요? 추가적인 최적화 방법이 있을까요? 이 접근 방식이 문제를 해결하는 데 충분히 효율적일까요? 추가적인 최적화 방법이 있을까요?",
      },
      {
        variant: "notice",
        commentId: 3,
        writerNickname: "곽규한",
        writerProfileImage:
          "https://velog.velcdn.com/images/wuzoo/post/0ccaf96f-ea68-46bb-8603-2dece6320b57/image.jpeg",
        createdAt: "2022-10-14T14:45:52.731Z",
        content: "알고헙 코멘트 박스를 만들고 있습니다.",
      },
    ];

    return (
      <ul>
        {data.map((item) => (
          <CommentBox
            key={item.commentId}
            {...item}
            variant={item.variant as "notice"}
          />
        ))}
      </ul>
    );
  },
};
