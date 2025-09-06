import { memo } from "react";
import { descStyle, metaStyle, promptWrapper, textStyle } from "./index.css";

type DecisionPromptProps =
  | {
      variant: "join";
      ownerName: string;
    }
  | {
      variant: "recommend";
      groupName: string;
    }
  | {
      variant: "applicant";
      applicantName: string;
      groupName: string;
    };

const getTexts = (props: DecisionPromptProps) => {
  const { variant } = props;

  switch (variant) {
    case "join":
      return {
        title: <h1 className={metaStyle}>스터디를 수락하시겠어요?</h1>,
        description: `${props.ownerName}님께서 스터디 그룹에 초대했어요.\n거절한 스터디는 링크를 다시 받아 가입할 수 있어요.`,
      };
    case "recommend":
      return {
        title: <h1 className={metaStyle}>스터디를 수락하시겠어요?</h1>,
        description: `[${props.groupName}] 스터디에 가입을 요청합니다.\n스터디장의 수락 후 멤버가 될 수 있습니다.`,
      };
    case "applicant":
      return {
        title: (
          <h1 className={textStyle}>
            <span className={metaStyle}>{props.applicantName}</span>님이 스터디
            가입을 신청했습니다.
          </h1>
        ),
        description: `${props.applicantName}님께서 [${props.groupName}] 스터디에 가입을 요청했어요.\n거절한 요청은 다시 승인할 수 없습니다.`,
      };
    default:
      return { title: "", description: "" };
  }
};

const DecisionPrompt = memo((props: DecisionPromptProps) => {
  const { title, description } = getTexts(props);

  return (
    <section className={promptWrapper}>
      {title}
      <p className={descStyle}>{description}</p>
    </section>
  );
});

DecisionPrompt.displayName = "DecisionPrompt";

export default DecisionPrompt;
export type { DecisionPromptProps };
