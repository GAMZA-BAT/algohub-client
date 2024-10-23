import {
  descStyle,
  metaStyle,
  promptWrapper,
} from "@/view/user/join-group/DecisionPrompt/index.css";

const DecisionPrompt = ({ owner }: { owner: string }) => {
  return (
    <section className={promptWrapper}>
      <h1 className={metaStyle}>스터디를 수락하시겠어요?</h1>
      <p className={descStyle}>
        {owner}님께서 스터디 그룹에 초대했어요.
        <br />
        거절한 스터디는 링크를 다시 받아 가입할 수 있어요.
      </p>
    </section>
  );
};

export default DecisionPrompt;
