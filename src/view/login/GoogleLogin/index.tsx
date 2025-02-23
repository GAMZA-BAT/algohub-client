import { IcnGitHub } from "@/asset/svg";
import {
  buttonStyle,
  githubTextStyle,
} from "@/view/login/GoogleLogin/index.css";

const GoogleLogin = () => {
  return (
    <button className={buttonStyle}>
      <IcnGitHub width={24} height={24} />
      <p className={githubTextStyle}>GitHub로 로그인</p>
    </button>
  );
};

export default GoogleLogin;
