import { IcnGithub } from "@/asset/svg";

import Button from "@/common/component/Button";
import { githubButtonStyle } from "@/shared/component/FormFooter/index.css";
import { signIn } from "next-auth/react";

const GithubButton = () => {
  return (
    <Button
      type="button"
      onClick={() => signIn("github")}
      className={githubButtonStyle}
      size="medium"
      color="white"
    >
      <IcnGithub width={24} height={24} />
      Github로 로그인
    </Button>
  );
};

export default GithubButton;
